import React from 'react';
import '../css/Body.css';

const Body = ({ name, surname, option, group, bg }) => {

    return (
        <div className="flex-column">

            <div className="flex-item">
                Name: {`${name}`}
            </div>

            <div className="flex-item">
                Surname: {`${surname}`}
            </div>

            <div className="flex-item">
                Number: {`${option}`}
            </div>

            <div className="flex-item">
                Color: {`${bg}`}
            </div>

            {group.map((each) =>
                <div className="flex-column" style={{ backgroundColor: each.color }} key={each.id}>
                    <div className="flex-item">{`Name: ${each.firstName}`}</div>
                    <div className="flex-item">{`Surname: ${each.lastName}`}</div>
                    <div className="flex-item">{`Select: ${each.select}`}</div>
                    <div className="flex-item">{`bgColor: ${each.color}`}</div>
                </div>
            )}


        </div>
    )
}

export default Body
