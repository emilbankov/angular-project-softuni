function showForm(formId) {
    let forms = document.querySelectorAll('.form');
    for (let i = 0; i < forms.length; i++) {
        forms[i].style.display = 'none';
    }

    let selectedForm = document.getElementById(formId + '-form');
    if (selectedForm) {
        selectedForm.style.display = 'flex';
    }
}