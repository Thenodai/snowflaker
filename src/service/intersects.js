const intersects = (currentParticle, Snowflake) => {
    let intersects = false;
    for (let i = 0; i < Snowflake.getParticles().length; i++) {
        const particle = Snowflake.getParticles()[i];
        let distance = p.dist(particle.x, particle.y, currentParticle.x, currentParticle.y);
        if (distance < currentParticle.r * 3) {
            intersects = true;
            break
        }
    }

    return intersects;
}

export default intersects;
