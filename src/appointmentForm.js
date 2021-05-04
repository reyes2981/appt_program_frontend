class AppointmentForm {
    static container = document.querySelector(".form-container")
    constructor() {
        this.render();
        this.attachEventListener();
    }

    attachEventListener() {
        this.form.addEventListener("submit", this.handleOnSubmit);
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const {title, author, published, image, category} = event.target;
        const data = {
            title: title.value,
            author: author.value,
            published: published.value,
            image: image.value,
            category_id: category.value,
        };
        api.createBook(data).then((book) => new BookCard(book));
        this.form.reset();
        const bookFormContainer = document.querySelector("#book-form")
        bookFormContainer.hidden = true
    }


    render() {
        const form = document.createElement("form");
        form.setAttribute("id", "new-book-form");
        form.innerHTML = this.renderInnerHTML();
        this.form = form;
        this.constructor.container.append(form);
    }

    renderInnerHTML = () => { 
        return `
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" name="title" id="book-title" class="form-control">
            </div>
            <div class="form-group">
                <label for="author">Author</label>
                <input type="text" name="author"id="book-author" class="form-control">
            </div>
            <div class="form-group">
                <label for="published">Published</label>
                <input type="text" name="published" id="book-published" class="form-control">
            </div>
            <div class="form-group">
                <label for="image">Image URL</label>
                <input type="text" name="image" id="book-image" class="form-control">
            </div>
            <div class="form-group">
                <label for="item-category">Category</label>
                <select id="book-category" name="category" class="form-control">
                    <option  value="1">History</option>
                    <option  value="2">Health</option>
                    <option  value="3 Fiction">Science Fiction</option>
                    <option  value="4">Law</option>
                    <option  value="5">Business</option>
                    <option  value="6">Politics</option>
                </select>
            </div>
            <input type="submit" name="submit" value="Add Book" class="btn btn-primary btn-block">
        `
    }
}