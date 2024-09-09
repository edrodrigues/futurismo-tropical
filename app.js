const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const expandedContent = button.parentNode.querySelector('.expanded-content');
    expandedContent.style.display = expandedContent.style.display === 'none' ? 'block' : 'none';
  });
});
