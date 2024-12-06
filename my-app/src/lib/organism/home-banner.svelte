<script>
    import {ImagesHome} from '../index.js';
</script>

<section>
    <div class="view">
        <ImagesHome pageStyle="glass-home-1" name="glass"/>
        <ImagesHome pageStyle="glass-home-2" name="glass"/>
    </div>
</section>

<style>
    section {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 120vh;
        justify-content: center;
        overflow: hidden;
        position: relative;
        text-align: center;
        width: 100%;
    }

    .view {
        position: absolute;
        z-index: 2;
    }
</style>