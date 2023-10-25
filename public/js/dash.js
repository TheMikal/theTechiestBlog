const deletePost = async (event) => {
    event.preventDefault();
    console.log("clicked");
    console.log(event.target);

    let blogPostId = event.target.getAttribute("data-id");
    console.log(blogPostId);

    const response = await fetch(`/api/blogPost/${blogPostId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.assign(`/dashboard`);
    } else {
        alert(response.statusText);
    }
};

const editPost = async (event) => {
    event.preventDefault();
    console.log("clicked");

    let blogPostId = event.target.getAttribute("data-id");

    document.location.assign(`/create/${blogPostId}`);
};

const editButton = document.querySelectorAll("#editBtn");

for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener("click", editPost);
}

const deleteButton = document.querySelectorAll("#deleteBtn");

for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deletePost);
}