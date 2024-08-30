document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const itemsList = document.getElementById('itemsList');

    // Fetch and display items on page load
    fetchItems();

    // Handle form submission for adding a new item
    itemForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const quantity = document.getElementById('quantity').value;
        const description = document.getElementById('description').value;

        const response = await fetch('/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, quantity, description }),
        });

        if (response.ok) {
            fetchItems(); // Refresh the item list
            itemForm.reset(); // Clear the form
        }
    });

    // Fetch all items and render them in the list
    async function fetchItems() {
        const response = await fetch('/api/items');
        const items = await response.json();

        itemsList.innerHTML = ''; // Clear the current list
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} (Quantity: ${item.quantity}) - ${item.description}`;
            
            // Edit button
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editItem(item));

            // Delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteItem(item._id));

            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
            itemsList.appendChild(listItem);
        });
    }

    // Edit an item
    async function editItem(item) {
        const name = prompt('Enter new name', item.name);
        const quantity = prompt('Enter new quantity', item.quantity);
        const description = prompt('Enter new description', item.description);

        if (name && quantity && description) {
            await fetch(`/api/items/${item._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, quantity, description }),
            });
            fetchItems(); // Refresh the item list
        }
    }

    // Delete an item
    async function deleteItem(id) {
        await fetch(`/api/items/${id}`, {
            method: 'DELETE',
        });
        fetchItems(); // Refresh the item list
    }
});
