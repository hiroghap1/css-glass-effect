        const glassEffect = document.getElementById('glassEffect');
        const controls = ['opacity', 'blur', 'border', 'shadow', 'highlight'];
        
        // コントロールの設定
        controls.forEach(control => {
            const slider = document.getElementById(control);
            const valueDisplay = document.getElementById(control + 'Value');
            
            slider.addEventListener('input', (e) => {
                const value = parseInt(e.target.value);
                valueDisplay.textContent = value;
                updateGlassEffect();
                updateFigmaPanel();
            });
        });
        
        function updateGlassEffect() {
            const opacity = document.getElementById('opacity').value;
            const blur = document.getElementById('blur').value;
            const border = document.getElementById('border').value;
            const shadow = document.getElementById('shadow').value;
            const highlight = document.getElementById('highlight').value;
            
            glassEffect.style.setProperty('--glass-opacity', opacity / 100);
            glassEffect.style.setProperty('--glass-blur', blur + 'px');
            glassEffect.style.setProperty('--border-opacity', border / 100);
            glassEffect.style.setProperty('--shadow-opacity', shadow / 100);
            glassEffect.style.setProperty('--highlight-opacity', highlight / 100);
        }
        
        function updateFigmaPanel() {
            // No need to update CSS output anymore
        }
        
        function generateCSS() {
            const opacity = document.getElementById('opacity').value;
            const blur = document.getElementById('blur').value;
            const border = document.getElementById('border').value;
            const shadow = document.getElementById('shadow').value;
            const highlight = document.getElementById('highlight').value;
            
            const css = `.glass-effect {
    background: rgba(255, 255, 255, ${(opacity / 100).toFixed(2)});
    backdrop-filter: blur(${blur}px);
    -webkit-backdrop-filter: blur(${blur}px);
    border: 1px solid rgba(255, 255, 255, ${(border / 100).toFixed(2)});
    border-radius: 20px;
    box-shadow: 
        0 8px 32px 0 rgba(31, 38, 135, ${(shadow / 100).toFixed(2)}),
        inset 0 1px 0 rgba(255, 255, 255, ${(highlight / 100).toFixed(2)});
}`;
            
            return css;
        }
        
        async function copyCSSCode() {
            const cssCode = generateCSS();
            const button = document.getElementById('copyButton');
            
            try {
                await navigator.clipboard.writeText(cssCode);
                
                // ボタンの状態を変更
                button.textContent = '✅ Copied!';
                button.classList.add('copied');
                
                // 2秒後に元に戻す
                setTimeout(() => {
                    button.textContent = '📋 Copy CSS';
                    button.classList.remove('copied');
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy CSS: ', err);
                
                // フォールバック: テキストエリアを使った古い方法
                const textArea = document.createElement('textarea');
                textArea.value = cssCode;
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    button.textContent = '✅ Copied!';
                    button.classList.add('copied');
                    
                    setTimeout(() => {
                        button.textContent = '📋 Copy CSS';
                        button.classList.remove('copied');
                    }, 2000);
                } catch (fallbackErr) {
                    console.error('Fallback copy failed: ', fallbackErr);
                    alert('Failed to copy CSS code');
                }
                
                document.body.removeChild(textArea);
            }
        }
        
        function applyPreset(preset) {
            const presets = {
                clear: {
                    opacity: 8,
                    blur: 5,
                    border: 10,
                    shadow: 20,
                    highlight: 60
                },
                frosted: {
                    opacity: 10,
                    blur: 15,
                    border: 30,
                    shadow: 40,
                    highlight: 20
                },
                card: {
                    opacity: 18,
                    blur: 22,
                    border: 25,
                    shadow: 35,
                    highlight: 30
                },
                modal: {
                    opacity: 22,
                    blur: 28,
                    border: 18,
                    shadow: 50,
                    highlight: 35
                }
            };
            
            const settings = presets[preset];
            if (!settings) return;
            
            Object.keys(settings).forEach(key => {
                const slider = document.getElementById(key);
                const valueDisplay = document.getElementById(key + 'Value');
                
                slider.value = settings[key];
                valueDisplay.textContent = settings[key];
            });
            
            updateGlassEffect();
            updateFigmaPanel();
        }
        
        // 初期化
        updateGlassEffect();
        updateFigmaPanel();