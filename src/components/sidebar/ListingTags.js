import React from 'react';

export default class ListingTags extends React.Component {
    render() {
        return (
            <>
                <div className="listings-details-page__sidebar-single sidebar__tags wow animated fadeInUp" data-wow-delay="0.4s">
                    <div className="title">
                        <h2>Tags</h2>
                    </div>
                    <div className="sidebar__tags-list">
                        {this.props.tags.map((tag, i) => (
                            <span key={i} style={{ textTransform: "capitalize" }}>{tag}</span>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}