import React from 'react';
import { useState } from 'react';

const OnePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigationClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header>
        <h1>Simple Webpage</h1>
        <nav>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavigationClick('home')}>
              Home
            </li>
            <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavigationClick('about')}>
              About
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavigationClick('contact')}>
              Contact
            </li>
          </ul>
        </nav>
      </header>

      <main>
      <section id="home" className="section">
    <h1>Welcome to My Awesome Website</h1>
    <p>
      Thank you for visiting! This is the home section of my one-page website.
      Feel free to explore the about and contact sections using the navigation links above.
    </p>
    <img
      src="https://placekitten.com/800/400"
      alt="Cute kitten to make your day better"
      style={{ maxWidth: '100%', borderRadius: '8px', margin: '20px 0' }}
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, quam a suscipit
      ultricies, felis tortor posuere ligula, nec blandit orci lacus vel mauris.
      Nulla facilisi. Integer vel est risus. Proin a metus vel tellus tincidunt scelerisque.
    </p>
    <p>
      Curabitur vitae ligula eget mauris fringilla malesuada.
      Suspendisse vel sapien ac libero cursus aliquet. Duis venenatis lectus ut risus fermentum,
      a volutpat quam eleifend. Integer auctor bibendum quam, id fringilla ligula commodo eu.
    </p>
  </section>

  <section id="about" className="section">
    <h1>About Section</h1>
    <div className="image-grid">
      <img src="https://placekitten.com/300/200" alt="HTML Image" />

      <img src="https://placekitten.com/301/200" alt="CSS Image" />

      <img src="https://placekitten.com/302/200" alt="JS Image" />

      <img src="https://placekitten.com/303/200" alt="HTML Image" />

      <img src="https://placekitten.com/304/200" alt="CSS Image" />

      <img src="https://placekitten.com/305/200" alt="JS Image" />

      <img src="https://placekitten.com/306/200" alt="HTML Image" />

      <img src="https://placekitten.com/307/200" alt="CSS Image" />

     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at possimus facilis incidunt praesentium, dolor beatae minima ipsa corrupti asperiores nostrum nam ut deserunt harum ad optio reprehenderit! Velit laboriosam, eligendi quam fugiat quod adipisci consectetur voluptates quis asperiores excepturi ex corporis numquam in harum cupiditate voluptatum. Porro rerum, saepe quod illo magni labore vero. Natus fugit, sint at eligendi excepturi in. Perferendis, esse? Quidem rem obcaecati inventore cumque at molestiae, debitis eius aliquam neque ipsam animi quis exercitationem vero quod atque. Earum quod culpa alias eum praesentium. Nihil dicta reiciendis eligendi labore at deleniti necessitatibus? Laudantium molestias rerum aperiam aliquid natus ab in ad molestiae! Vel architecto dolorum eligendi ducimus error atque optio accusamus laboriosam neque fugiat voluptas nostrum aliquam sunt quos veniam ut ab, adipisci aut nesciunt soluta libero. Rerum corporis dolore aliquam nulla minus maiores ea quisquam mollitia nostrum id? Sed quidem explicabo magnam, quis ab corporis consequuntur dignissimos possimus maxime itaque nostrum in quibusdam dolores vitae quaerat? Illo dolore ipsa officiis! Est recusandae animi vero ipsam quia blanditiis, tempora aliquid amet doloribus voluptatibus. Repudiandae earum hic, harum similique ab architecto culpa accusamus in cum rerum, repellat placeat sequi magnam vel aliquid expedita aut praesentium adipisci commodi explicabo laboriosam, distinctio beatae? Ullam suscipit, dolorem ipsam repellat tempora perspiciatis autem quod officiis sapiente sit officia necessitatibus, delectus corrupti repellendus? Blanditiis fugit quam et aut magnam atque eveniet nihil facere obcaecati totam hic recusandae, laboriosam dignissimos ipsa mollitia sunt quis possimus deleniti? Suscipit culpa quia, consequatur tenetur incidunt corporis deserunt cupiditate temporibus consequuntur fuga alias. Ipsum nemo non reiciendis eum quas ratione autem doloremque eveniet quia tenetur vitae, voluptatibus accusantium vel natus, dignissimos ad qui distinctio maxime soluta. Labore, tempore. Voluptate molestiae quae praesentium corporis deserunt. Veritatis tenetur repudiandae repellat modi odit! Accusantium expedita quos repellat molestiae. Quis, dolores dolorem! Voluptatibus maiores autem suscipit. Optio nesciunt tenetur aliquam laborum ex facere at dolorem sequi qui quod autem adipisci quam numquam, atque dicta quas nemo a sapiente tempora. Vero molestias consectetur quasi libero fugit porro? Dolore neque facere sed asperiores?
     </p>
    </div>
  </section>

  <section id="contact" className="section">
    <h1>Contact Section</h1>
    <div className="contact-details">
      <p>
        Thank you for reaching out! Feel free to contact us using the information below.
      </p>
      <address>
        <strong>Address:</strong>
        <br />
        123 Main Street, Cityville, Country
      </address>
      <p>
        <strong>Phone:</strong> +1 (555) 123-4567
      </p>
      <p>
        <strong>Email:</strong> contact@example.com
      </p>
    </div>
    <div className="contact-form">
      <h2>Send us a Message</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
      </main>
      <footer>
  <div className="footer-content">
    <p>&copy; 2023 Your Website Name. All Rights Reserved.</p>
    <div className="social-media-links">
      <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default OnePage;
