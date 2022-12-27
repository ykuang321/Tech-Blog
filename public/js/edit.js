const updateBlog = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('#new-title').value.trim();
    const description = document.querySelector('#new-description').value.trim();

    const response = await fetch(`/api/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        blog_id: id,
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update blog');
    }
  }
};

const deleteBlog = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blog/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};


document
  .querySelector('.update-blog')
  .addEventListener('click', updateBlog);

document
  .querySelector('.delete-blog')
  .addEventListener('click', deleteBlog);