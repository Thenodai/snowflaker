const intersects = (currentParticle, Snowflake, p5) => {
    let intersects = false;
    for (let i = 0; i < Snowflake.getParticles().length; i++) {
        const particle = Snowflake.getParticles()[i];
        let distance = p5.dist(particle.x, particle.y, currentParticle.x, currentParticle.y);
        if (distance < currentParticle.r * 3) {
            intersects = true;
            break
        }
    }

    return intersects;
}

export default intersects;
