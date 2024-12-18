const faqTitles = document.querySelectorAll('.faq-title');

faqTitles.forEach(title => {
  title.addEventListener('mouseenter', () => {
    const contentId = title.getAttribute('data-faq');
    const content = document.getElementById(contentId);
    content.style.display = 'block';
  });

  title.addEventListener('mouseleave', () => {
    const contentId = title.getAttribute('data-faq');
    const content = document.getElementById(contentId);
    content.style.display = 'none';
  });
});


document.querySelectorAll('.question-wrap h6').forEach((question) => {
  question.addEventListener('click', () => {
      const answer = question.nextElementSibling;

      // Toggle the rotation and open/close state
      question.classList.toggle('rotate');
      if (answer.style.maxHeight) {
      answer.style.maxHeight = null; // Close
      answer.style.paddingBottom = '0';
      } else {
      answer.style.maxHeight = `${answer.scrollHeight}px`; // Open
      answer.style.paddingBottom = '40px';
      }
  });
  });