const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'Space' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})

//here we are displaying what key is pressed by the user and its code (ASCII value) through tabular representation using an event which is a 'keydown' event --> one of the events in Keyboard events like pointer and mouse events which we used earlier while learning events 