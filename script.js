document.addEventListener('DOMContentLoaded', function() {
    // Function to handle button click
    function handleClick() {
        const output = document.getElementById('output');
        output.textContent = 'Button clicked, Sir!';
    }

    // Add click event listener to the button
    const button = document.getElementById('clickButton');
    button.addEventListener('click', handleClick);
});
