import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import css from './ReviewsCampers.module.css';
import { fetchCampers } from '../../redux/campers/operations';

const ReviewsCampers = ({reviewer_name, reviewer_rating, comment}) => {
    return (
        <>
        <ul>
            <li>
                <h4>{reviewer_name}</h4>
                <p>{reviewer_rating}</p>
                <p>{comment}</p>
            </li>
        </ul>
        </>
    )
}

    export default ReviewsCampers;