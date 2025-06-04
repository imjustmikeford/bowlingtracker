document.getElementById('shotForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const frame = document.getElementById('frame').value;
  const feet = document.getElementById('feet').value;
  const target = document.getElementById('target').value;
  const hit = document.getElementById('hit').value;
  const ballAction = document.getElementById('ballAction').value;

  const table = document.getElementById('log');
  const row = document.createElement('tr');

  [frame, feet, target, hit, ballAction].forEach(data => {
    const td = document.createElement('td');
    td.textContent = data;
    row.appendChild(td);
  });

  table.appendChild(row);

  // Clear form
  this.reset();
});
