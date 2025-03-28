import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_qyif94f";
        const templateID = "template_gcft5ck";
        const publicKey = "RPSpZPMFCF0oknFRj";

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((response) => {
                console.log("Correo enviado con éxito!", response.status, response.text);
                alert("Mensaje enviado!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error al enviar el correo:", error);
                alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
            });
    };

    return (
        <section className="section-contact">
            <h3 id="contact" className="section-contact-title">📬 Contáctame</h3>
            <section className="contact">
                <p className="contact-text">Puedes escribirme:</p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Tu Mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-textarea"
                        required
                    />
                    <button type="submit" className="contact-button">Enviar</button>
                </form>
            </section>
        </section>
    );
}

export default Contact;
