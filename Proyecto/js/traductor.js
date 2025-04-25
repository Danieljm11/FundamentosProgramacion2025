// traducciones en español e inglés
const translations = {
    //objeto de idioma español
    es: {
        optionMenu1: "Tour 360",
        optionMenu2: "Herr. Manuales",
        optionMenu3: "Martillos",
        optionMenu4: "Desatornilladores",
        optionMenu5: "Herr. Electricas",
        optionMenu6: "Taladros",
        optionMenu7: "Cierras",
        optionMenu8: "Contacto",
        espanish: "Español",
        english: "Ingles",
        title1: "Bienvenidos a Martillo al Klavo",
        title2: "Herramientas Manuales",
        p1: "¡Bienvenido a Martillo al Klavo! Somos su ferretería de confianza, ofreciendo una amplia gama de productos para satisfacer todas sus necesidades de construcción y bricolaje.",
        title3: "Herramientas Electricas",
        p2: "Ofrecemos una variedad de herramientas manuales esenciales para cualquier tarea, incluyendo martillos, destornilladores y alicates. Nuestros productos están fabricados con materiales resistentes para asegurar un rendimiento óptimo en cada uso.",
        buttonJoin: "Ingresar",
        title5: "Marcas más populares",
        title6: "Servicio de Envio",
        title7: "¡Pedidos a cualquier hora y en cualquier lugar!",
        p3: "Descubra nuestra selección de herramientas eléctricas de alta calidad, diseñadas para facilitar y agilizar sus proyectos. Desde taladros hasta sierras eléctricas, contamos con las mejores marcas para garantizar eficiencia y durabilidad.",
        p5: "Además de nuestra amplia gama de productos, ofrecemos un servicio de envío diseñado para brindarle comodidad y eficiencia en sus compras. A continuación, destacamos cinco beneficios clave de este servicio:",
        title8: "Reciba sus productos directamente en su domicilio, evitando desplazamientos y facilitando la adquisición de artículos voluminosos o pesados.",
        title9: "Realice sus pedidos desde la comodidad de su hogar, con la seguridad de que sus compras llegarán en el tiempo acordado.",
        title10: "Contamos con un equipo dedicado que garantiza entregas seguras y puntuales, asegurando la satisfacción de nuestros clientes.",
        title11: "Ofrecemos asesoramiento técnico y seguimiento de sus pedidos, asegurando que reciba exactamente lo que necesita para sus proyectos.",
        title12: "Al reducir costos de infraestructura, podemos ofrecer tarifas de envío más accesibles, beneficiando su economía.",
        title13: "¡En Martillo al Klavo, tu satisfacción es nuestra prioridad!",
        p6: "Visítenos y permita que nuestro equipo de expertos le asesore en la elección de los productos ideales para sus proyectos. ¡Estamos aquí para ayudarle a construir sus ideas!",
        title14: "Suscríbete para conseguir ofertas mensuales",
        p7: "Tu email",
        p8: "Enviar",
        title15: "Acerca de nosotros",
        p9: "En Martillo al Klavo, nos dedicamos a ofrecer una amplia gama de herramientas y materiales de construcción de la más alta calidad. Nuestro compromiso es proporcionar a profesionales y entusiastas del bricolaje los productos y el asesoramiento que necesitan para llevar a cabo sus proyectos con éxito. Con años de experiencia en el sector, nos enorgullece ser un referente de confianza en la comunidad.",
        title16: "Links de acceso",
        buttonText: "Traducir a ingles"
    },
    //objeto de idioma ingles
    en: {
        optionMenu1: "360 Tour",
        optionMenu2: "Hand Tools",
        optionMenu3: "Hammers",
        optionMenu4: "Screwdrivers",
        optionMenu5: "Power Tools",
        optionMenu6: "Drills",
        optionMenu7: "Saws",
        optionMenu8: "Contact",
        espanish: "Spanish",
        english: "English",
        title1: "Welcome to Martillo al Klavo",
        title2: "Hand Tools",
        p1: "Welcome to Martillo al Klavo! We are your trusted hardware store, offering a wide range of products to meet all your construction and DIY needs.",
        title3: "Power Tools",
        p2: "We offer a variety of essential hand tools for any task, including hammers, screwdrivers, and pliers. Our products are made from durable materials to ensure optimal performance with every use.",
        buttonJoin: "Join",
        title5: "Most Popular Brands",
        title6: "Shipping Service",
        title7: "Orders Anytime, Anywhere!",
        p3: "Discover our selection of high-quality power tools, designed to make your projects easier and faster. From drills to electric saws, we carry the best brands to ensure efficiency and durability.",
        p5: "In addition to our wide range of products, we offer a shipping service designed to provide convenience and efficiency for your purchases. Below, we highlight five key benefits of this service:",
        title8: "Receive your products directly at your doorstep, avoiding trips and making it easier to acquire bulky or heavy items.",
        title9: "Place your orders from the comfort of your home, with the assurance that your purchases will arrive on time.",
        title10: "We have a dedicated team that ensures safe and timely deliveries, guaranteeing customer satisfaction.",
        title11: "We offer technical advice and order tracking, ensuring you get exactly what you need for your projects.",
        title12: "By reducing infrastructure costs, we can offer more affordable shipping rates, benefiting your budget.",
        title13: "At Martillo al Klavo, your satisfaction is our priority!",
        p6: "Visit us and let our team of experts help you choose the perfect products for your projects. We’re here to help you build your ideas!",
        title14: "Subscribe to Get Monthly Deals",
        p7: "Your email",
        p8: "Send",
        title15: "About Us",
        p9: "At Martillo al Klavo, we are committed to offering a wide range of top-quality tools and construction materials. Our mission is to provide both professionals and DIY enthusiasts with the products and guidance they need to successfully complete their projects. With years of experience in the industry, we are proud to be a trusted name in the community.",
        title16: "Quick Links",
        buttonText: "Translate to English"

    }
};

// funcion para cambiar el idioma
function changeLanguage() {
    //conversion del lenguaje html
    const lang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;

    // cambiar texto de los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        //asignacion de atributo data-translate
        const key = element.getAttribute('data-translate');
        //elementos html sean tradudidos por las llaves lang - key
        element.innerHTML = translations[lang][key];

    });
}