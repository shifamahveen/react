import React from 'react'

function Section(props) {
    return (
        <div>
            {
                Object.entries(props).map(([key, value]) => (
                    <p key={key}>
                        {key}: {value}
                    </p>
                ))
            }
        </div>
    );
}

export default Section;