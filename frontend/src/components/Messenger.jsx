import React from 'react';

const Messenger = () => {
  return (
    <div className="woofender">
      <ul
        class="list-group list-group-flush"
        style={{ width: '15rem', borderRadius: '1rem' }}
      >
        <li class="list-group-item active">Woofender</li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <form class="d-flex p-2">
            <input
              class="form-control me-2"
              type="text"
              placeholder="Search User"
              aria-label="Search"
            />
            <button class="btn btn-light" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span> Jane Doe</span> <i class="fa-solid fa-message"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span> Jack Jackson</span> <i class="fa-solid fa-message"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span> Dr. Strange</span> <i class="fa-solid fa-message"></i>
        </li>
      </ul>
    </div>
  );
};

export default Messenger;
