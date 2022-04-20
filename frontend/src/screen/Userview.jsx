import React from 'react';

const Userview = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div class="card text-center m-3" style={{ width: '40rem' }}>
        <div class="card-header d-flex align-items-center justify-content-around">
          <h5 class="card-title">John Doe</h5>
        </div>
        <img
          src="https://static1.therichestimages.com/wordpress/wp-content/uploads/2015/02/shutterstock_Cute-Dog.jpg"
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body">
          <p class="card-text text-start">
            <p class="card-text text-start d-flex  justify-content-around flex-column">
              <div className="w-100 d-flex  justify-content-center">
                <span className="p-3">Gender</span>
                <span className="p-3">Male</span>
              </div>

              <div className="w-100 d-flex  justify-content-center">
                <span className="p-3">Age</span>
                <span className="p-3">22 Years</span>
              </div>
              <div className="w-100 d-flex  justify-content-center">
                <span className="p-3">City</span>
                <span className="p-3">Kolkata</span>
              </div>
            </p>
          </p>
        </div>
        <div class="card-footer d-flex justify-content-around">
          <div>
            <i class="fa-solid fa-thumbs-up"></i>
            <span>Like</span>
          </div>
          <div>
            <i class="fa-solid fa-comment-dots"></i>
            <span>Comment</span>
          </div>
          <div>
            <i class="fa-solid fa-paw"></i>
            <span>Pet Profile</span>
          </div>
          <div>
            <i class="fa-solid fa-bookmark"></i>
            <span>Saved</span>
          </div>
          <div>
            <i class="fa-solid fa-clone"></i>
            <span>Posts</span>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-start">
          <div>
            <ul class="list-group  ">
              <li class="list-group-item text-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
              </li>
              <li class="list-group-item text-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
              </li>
              <li class="list-group-item text-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
              </li>
            </ul>
          </div>
          <div class="card text-center m-3 " style={{ width: '40rem' }}>
            <div class="card-header d-flex align-items-center justify-content-around">
              <h5 class="card-title">Jimmy</h5>
            </div>
            <img
              src="https://static1.therichestimages.com/wordpress/wp-content/uploads/2015/02/shutterstock_Cute-Dog.jpg"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <p class="card-text text-start d-flex  justify-content-around flex-column">
                <div className="w-100 d-flex  justify-content-center">
                  <span className="p-3">Gender</span>
                  <span className="p-3">Male</span>
                </div>

                <div className="w-100 d-flex  justify-content-center">
                  <span className="p-3">Age</span>
                  <span className="p-3">2 Years</span>
                </div>
                <div className="w-100 d-flex  justify-content-center">
                  <span className="p-3">Breed</span>
                  <span className="p-3">Many</span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Back</button>
      </div>
    </div>
  );
};

export default Userview;
