import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensaje enviado!");
        setFormData({ name: "", email: "", message: "" });
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

