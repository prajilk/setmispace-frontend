import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const SearchButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* <li><a href="#" className="main-menu__search search-toggler icon-search" variant="primary" onClick={handleShow}>{ }</a></li> */}
            <li><button className="main-menu__search search-toggler icon-search" variant="primary" onClick={handleShow}>{ }</button></li>
            <div className="search-popup">
                <Modal show={show} onHide={handleClose} className="search-popup__overlay search-toggler">
                    <div className="search-popup__content">
                        <form action="#">
                            <label for="search" class="sr-only">search here</label>
                            <input type="text" id="search" placeholder="Search Here..." />
                            <button type="submit" aria-label="search submit" class="thm-btn2">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default SearchButton;