function calculateFlooringCost() {
    const lengthFt = parseFloat(document.getElementById('roomLength').value) || 0;
    const widthFt = parseFloat(document.getElementById('roomWidth').value) || 0;
    const tileLenIn = parseFloat(document.getElementById('tileLength').value) || 0;
    const tileWidIn = parseFloat(document.getElementById('tileWidth').value) || 0;
    const wasteInput = parseFloat(document.getElementById('wasteAllowance').value) || 0;
    const currencySymbol = document.getElementById('currencySelect').value;
    const costPerTile = parseFloat(document.getElementById('unitCost').value) || 0;

    if (lengthFt <= 0 || widthFt <= 0 || tileLenIn <= 0 || tileWidIn <= 0) {
        alert('Please enter valid room and tile dimensions!');
        return;
    }

    const roomAreaSqFt = lengthFt * widthFt;
    const tileLenFt = tileLenIn / 12;
    const tileWidFt = tileWidIn / 12;
    const singleTileAreaSqFt = tileLenFt * tileWidFt;

    if (singleTileAreaSqFt <= 0) {
        alert('Invalid tile dimensions provided.');
        return;
    }

    const exactTiles = roomAreaSqFt / singleTileAreaSqFt;
    const wasteMultiplier = 1 + (wasteInput / 100);
    const totalTilesNeeded = Math.ceil(exactTiles * wasteMultiplier);
    const estimatedCost = totalTilesNeeded * costPerTile;

    document.getElementById('roomArea').textContent = roomAreaSqFt.toFixed(2);
    document.getElementById('totalTiles').textContent = totalTilesNeeded;
    document.getElementById('currencySymbol').textContent = currencySymbol;
    document.getElementById('totalCost').textContent = estimatedCost.toFixed(2);
    
    document.getElementById('resultBox').style.display = 'block';
}
