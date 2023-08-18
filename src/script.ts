document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.getElementById('uploadButton');
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    const responseDiv = document.getElementById('response');

    uploadButton.addEventListener('click', () => {
        const file = fileInput.files[0];
        const formData = new FormData();

        formData.append('file', file);

        fetch('https://redgreenvision.azurewebsites.net/upload', { // Replace with your server's endpoint
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(result => {
            responseDiv.textContent = result; // Display the response message
        })
        .catch(error => {
            responseDiv.textContent = 'An error occurred.';
            console.error(error);
        });
    });
});

