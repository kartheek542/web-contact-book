const FavouriteCard = props => {
    const {contactDetails} = props;
    const {name, place, locations, tags} = contactDetails;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default FavouriteCard;