const insert = document.querySelector('.insert')
window.addEventListener('keydown', (e)=>{
    // console.log('clicked');
    insert.innerHTML = `
    <div class = "table">
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
    
    </div>
    `
})