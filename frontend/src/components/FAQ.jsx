import React from 'react';
const FAQ = () => {
  return (
    <div className="faq">
      <ul class="list-group" style={{ width: '20rem', borderRadius: '1rem' }}>
        <li class="list-group-item active" aria-current="true">
          FAQs
        </li>
        <li class="list-group-item">
          <a
            target="_blank"
            href="https://www.thesprucepets.com/can-dogs-see-in-the-dark-5199751"
          >
            Can Dogs see in the Dark?
          </a>
        </li>
        <li class="list-group-item">
          <a
            target="_blank"
            href="https://www.thesprucepets.com/why-do-dogs-sigh-5199223"
          >
            Why Do Dogs Sigh?
          </a>
        </li>
        <li class="list-group-item">
          <a
            target="_blank"
            href="https://www.thesprucepets.com/do-dogs-have-emotions-5199225"
          >
            Do Dogs Feel Emotions?
          </a>
        </li>
        <li class="list-group-item">
          <a
            target="_blank"
            href="https://www.thesprucepets.com/what-are-dewclaws-5199033"
          >
            What Are Dewclaws and Why Do Dogs Have Them?
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
