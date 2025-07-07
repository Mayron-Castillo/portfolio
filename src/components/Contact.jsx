import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_qyif94f";
    const templateID = "template_gcft5ck";
    const publicKey = "RPSpZPMFCF0oknFRj";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log(
          "Correo enviado con éxito!",
          response.status,
          response.text
        );
        alert("Mensaje enviado!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      });
  };

  return (
    <section id="contact" className="pt-12 px-4 md:px-0 md:pt-12">
      <h3 className="text-[2.5rem] py-[1.5rem] md:pt-12">📬 Contáctame</h3>
      <section className="text-center p-[40px] bg-[#fafdff] border-2 border-[#bee6f9] rounded-lg shadow-lg m-auto max-w-[768px]">
        <p className="text-[2rem] text-[#333] mb-5">Puedes escribirme:</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full max-w-[400px] mx-auto px-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border-2 border-[#bee6f9] rounded-md outline-none transition-all duration-300 ease-in-out hover:border-[#85d2f4] focus:border-[#85d2f4]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border-2 border-[#bee6f9] rounded-md outline-none transition-all duration-300 ease-in-out hover:border-[#85d2f4] focus:border-[#85d2f4]"
            required
          />
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border-2 border-[#bee6f9] rounded-md outline-none transition-all duration-300 ease-in-out hover:border-[#85d2f4] focus:border-[#85d2f4] resize-none h-[120px]"
            required
          />
          <button
            type="submit"
            className="bg-[#0b5981] text-white p-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#083a5a]"
          >
            Enviar
          </button>
        </form>
      </section>
    </section>
  );
}

export default Contact;
