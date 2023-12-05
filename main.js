// Primer desafio entregable -- Back-End--

class ProductManager {


    // Constructor con array vacio
    constructor() {
        this.products = [];
        this.productId = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        // Valida campos obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Te faltó uno de los campos, recordá que todos son obligatorios');
            return;
        }

        // Valida código único
        if (this.products.some(item => item.code === code)) {
            console.log('Vaya!, parece que el codigo esta repetido y debe ser unico.');
            return;
        }

        // Crea nuevo objeto con datos anteriores y id autoincrementable
        const newProduct = {
            id: ++this.productId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        // Agrega el nuevo producto al array
        this.products.push(newProduct);
    }

    getProduct() {
        console.log(this.products)
    }

    getProductById(id, title) {
        const prod = this.products.find(item => item.id === id);

        if (prod) {
            console.log(`Genial! Se entontró el producto: ${prod.title} `, prod);
        } else {
            console.log('Vaya! No hemos encontrado el producto que buscas');
        }
        return prod;


    }

}


// Testing 

const manager = new ProductManager();

manager.getProduct();

manager.addProduct("Yerba", "de la mejor", 10, "Sin imagen", "abc123", 25);
manager.addProduct("Arroz", "de sushi", 10, "Sin imagen", "abc124", 25);
manager.addProduct("Jamon", "pata negra", 10, "Sin imagen", "abc125", 25);


manager.getProduct();

manager.getProductById(7)

