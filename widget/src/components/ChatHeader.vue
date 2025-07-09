<template>
    <header>
        <div class="responder-switch">
            <input type="checkbox" id="responder-toggle" v-model="isAIResponder" @change="toggleResponder">
            <label for="responder-toggle" class="toggle-container">
                <span class="toggle-icon ai-icon">
                    <svg width="800px" height="800px" viewBox="0 0 512 512" version="1.1">
                        <title>ai</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                            <g id="icon" transform="translate(64.000000, 64.000000)">
                                <path
                                    d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"
                                    id="Combined-Shape">
                                </path>
                            </g>
                        </g>
                    </svg>
                </span>
                <span class="toggle-icon operator-icon">
                    <svg width="800px" height="800px" viewBox="0 0 32 32">
                        <path
                            d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                    </svg>
                </span>
                <span class="toggle-handle"></span>
            </label>
        </div>
        <div class="setting-buttons">
            <button class="theme-toggle" @click="toggleTheme" aria-label="Сменить тему">
                <svg class="theme-icon sun" viewBox="0 0 24 24">
                    <path
                        d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                </svg>
                <svg class="theme-icon moon" viewBox="0 0 24 24">
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" />
                </svg>
            </button>
            <button class="close-widget-button" @click="closeWidget"></button>
        </div>

    </header>
</template>

<script>
export default {
    methods: {
        closeWidget() {
            this.$emit('closeWidget')
        },
        toggleTheme() {
            document.body.classList.toggle('dark-theme');
        }
    }
}
</script>

<style scoped>
header {
    width: 100%;
    height: 50px;
    background-color: var(--primary);
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
}

.close-widget-button {
    z-index: 10;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    padding: 0;
    background-color: var(--bg);
    color: var(--text);
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 1;
}

.close-widget-button::before {
    content: "×";
    display: block;
    color: inherit;
}

.close-widget-button:hover {
    background-color: var(--hover);
    transform: scale(1.1);
}

.close-widget-button:active {
    transform: scale(0.95);
}

.theme-toggle {
    position: relative;
    width: 32px;
    height: 32px;
    background: var(--bg);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.theme-toggle:hover {
    background: var(--hover);
    transform: scale(1.1);
}

.theme-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    fill: var(--text);
    transition: opacity 0.3s ease, transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.sun {
    opacity: 1;
    transform: rotate(0deg) scale(1);
}

.moon {
    opacity: 0;
    transform: rotate(-45deg) scale(0.5);
}

.dark-theme .sun {
    opacity: 0;
    transform: rotate(45deg) scale(0.5);
}

.dark-theme .moon {
    opacity: 1;
    transform: rotate(0deg) scale(1);
}

.theme-toggle:active {
    transform: scale(0.9);
}

.responder-switch {
    display: flex;
    align-items: center;
    height: 100%;
}

#responder-toggle {
    display: none;
}

.toggle-container {
    position: relative;
    width: 80px;
    height: 36px;
    border-radius: 18px;
    background-color: var(--bg);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    padding: 0 6px;
}

.toggle-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 2;
}

.toggle-icon svg {
    width: 20px;
    height: 20px;
    stroke: var(--text-light);
}

.ai-icon {
    fill: var(--text);
    margin-right: auto;
}


.operator-icon {
    margin-left: auto;
    fill: var(--text);
}

.toggle-handle {
    position: absolute;
    left: 4px;
    width: 28px;
    height: 28px;
    background-color: var(--accent);
    border-radius: 50%;
    transition: all 0.3s linear;
    z-index: 1;
}

#responder-toggle:checked+.toggle-container .toggle-handle {
    transform: translateX(44px);
}

#responder-toggle:checked+.toggle-container .ai-icon svg {
    stroke: var(--text-light);
}

#responder-toggle:not(:checked)+.toggle-container .operator-icon svg {
    stroke: var(--text-light);
}

#responder-toggle:checked+.toggle-container .operator-icon svg,
#responder-toggle:not(:checked)+.toggle-container .ai-icon svg {
    stroke: var(--text);
}

.toggle-container:hover {
    background-color: var(--hover);
}

.toggle-container:hover .toggle-handle {
    transform: scale(1.1);
    transform-origin: center;
}

#responder-toggle:checked+.toggle-container:hover .toggle-handle {
    transform: translateX(44px) scale(1.1);
}

.setting-buttons{
    display: flex;
    gap: 5px;
    align-items: center;
}

</style>