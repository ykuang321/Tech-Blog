const newComment = async (event) => {
  event.preventDefault();

  // Collect values from the comment form
  const comment = document.querySelector('#new-comment').value.trim();
  const blog_id = window.location.toString().split("/")
  [
    window.location.toString().split("/").length - 1
  ];

  if (comment) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ comment, blog_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const deleteComment = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comment/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete comment');
    }
  }
};


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newComment);

  document
  .querySelector('.comment-list')
  .addEventListener('click', deleteComment);