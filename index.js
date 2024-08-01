function distanceFromHqInBlocks (pickupLocation){
    const hqLocation = 42;
    const distance = Math.abs(pickupLocation-hqLocation );
    return distance;


}

function distanceFromHqInFeet (pickupLocation){
    const blocks =distanceFromHqInBlocks (pickupLocation);
    const feetPerBlock = 264;
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet;
}

function distanceTravelledInFeet (start , destination) {

    const feetPerBlock = 264;
    const distanceFromHqInBlocks = Math.abs (destination - start);
    const distanceFromHqInFeet = distanceFromHqInBlocks * feetPerBlock;
    return distanceFromHqInFeet;


}

function calculatesFarePrice (start , destination) {
    const distance = Math.abs (destination -start)*264;

    if (distance <= 400 ) {
        return 0;
    }    else if (distance > 400 && distance <= 2000) {
        return (distance -400 ) * 0.02;

    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }



    }



