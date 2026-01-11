<div class="overlay">
    <div class="load">
        <span>Loading</span>
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
    </div>
</div>

<style>
    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(255,255,255,0.6);
        backdrop-filter: blur(2px);
        display: grid;
        place-items: center;
        z-index: 9999;
    }

    .load {
        position: absolute;
        display: flex;
        align-items: center;
        align-content: center;
        gap: 1rem;
    }

    .load span {
        color: var(--brown);
        font-size: 2rem;
    }

    .box {
        width: 2rem;
        height: 2rem;
        background-color: var(--green);
    }

    .box1 {
    animation: 3s loading infinite;
    }

    .box2 {
    animation: 3s loading infinite;
    animation-delay: 1s;
    }

    .box3 {
    animation: 3s loading infinite;
    animation-delay: 2s;
    }


    @keyframes loading {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
    }
</style>
