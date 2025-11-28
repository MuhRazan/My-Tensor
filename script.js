function openModal(src) {  
    const modal = document.getElementById("modal");  
    const modalImg = document.getElementById("modal-img");  
    modalImg.src = src;  
    modal.style.display = "flex";  
}  

function closeModal() {  
    document.getElementById("modal").style.display = "none";  
}  

// Tutup modal saat klik di luar gambar  
window.onclick = function(event) {  
    const modal = document.getElementById("modal");  
    if (event.target === modal) {  
        modal.style.display = "none";  
    }  
}  