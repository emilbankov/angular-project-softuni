document.addEventListener('DOMContentLoaded', function () {
    var gallery = new Flickity('.gallery');
    gallery.off('pointerDown', gallery.stopPlayer);
    gallery.off('uiChange', gallery.stopPlayer);
});