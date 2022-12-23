const updateBlog = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('#new-title').value.trim();
    const description = document.querySelector('#new-description').value.trim();

    const response = await fetch(`/api/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id,
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete project');
    }
  }
};

// const deleteBlog = async (event) => {
//   event.preventDefault();

//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/blog/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };


document
  .querySelector('.edit-blog-form')
  .addEventListener('click', updateBlog);

// document
//   .querySelector('.edit-blog-form')
//   .addEventListener('click', deleteBlog);