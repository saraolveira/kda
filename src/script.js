import './style/main.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'


window.addEventListener('load', () => {
    // Canvas
    let canvas = document.querySelector('canvas.webgl')

    // Sizes
    const sizes = {
        width: canvas.clientWidth,
        height: canvas.clientHeight 
    }

    const mediasize = window.matchMedia("(min-width:1024px)")

    window.addEventListener('resize', () => {

        if (mediasize.matches) {
        // update sizes
        sizes.width = window.innerWidth / 2
        sizes.height = canvas.clientHeight

        // update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        
        // update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        }
    })

    // Scene 
    const scene = new THREE.Scene()

    // Texture loader
    const textureLoader = new THREE.TextureLoader()

    // Draco loader
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('draco/')

    // GLTF loader
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 3
    camera.position.y = 1
    scene.add(camera)


    // CHAMPIONS
    // SLIDER
    const skinSelectors = document.querySelectorAll('.slider-inner')

    let sliding = false
    skinSelectors.forEach(skinSelector => {skinSelector.addEventListener('mousedown', () => {sliding = true})})
    skinSelectors.forEach(skinSelector => {skinSelector.addEventListener('mouseup', () => {sliding = false})})
    skinSelectors.forEach(skinSelector => {skinSelector.addEventListener('mouseleave', () => {sliding = false})})
    skinSelectors.forEach(skinSelector => {skinSelector.addEventListener('mousemove', (e) => {if(sliding) {skinSelector.parentElement.scrollTop -= e.movementY}})})

    // SELECTORS
    // common selectors
    let root = document.documentElement

    const cursor = document.querySelector('.cursor')
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(calc(${e.pageX}px - 50%), calc(${e.pageY}px - 50%), 0)`
    })

    const ahriSelectors = document.querySelectorAll('.ahri-selector')
    const akaliSelectors = document.querySelectorAll('.akali-selector')
    const evelynnSelectors = document.querySelectorAll('.evelynn-selector')
    const kaisaSelectors = document.querySelectorAll('.kaisa-selector')
    const seraphineSelectors = document.querySelectorAll('.seraphine-selector')

    const skins = document.querySelectorAll('.skin')

    // chromas
    const chromas = document.querySelector('.chromas')
    let activeChromas = document.querySelectorAll('.chroma')
    const ruby = document.createElement('div')
    ruby.classList.add('chroma', 'ruby')
    const catseye = document.createElement('div')
    catseye.classList.add('chroma', 'catseye')
    const citrine = document.createElement('div')
    citrine.classList.add('chroma', 'citrine')
    const rose = document.createElement('div')
    rose.classList.add('chroma', 'rose')
    const amethyst = document.createElement('div')
    amethyst.classList.add('chroma', 'amethyst')
    const pearl = document.createElement('div')
    pearl.classList.add('chroma', 'pearl')
    const golden = document.createElement('div')
    golden.classList.add('chroma', 'golden')
    const obsidian = document.createElement('div')
    obsidian.classList.add('chroma', 'obsidian')
    const aquamarine = document.createElement('div')
    aquamarine.classList.add('chroma', 'aquamarine')
    const peridot = document.createElement('div')
    peridot.classList.add('chroma', 'peridot')
    const night = document.createElement('div')
    night.classList.add('chroma', 'night')
    const baddest = document.createElement('div')
    baddest.classList.add('chroma', 'baddest')
    const emerald = document.createElement('div')
    emerald.classList.add('chroma', 'emerald')
    const tanzanite = document.createElement('div')
    tanzanite.classList.add('chroma', 'tanzanite')
    const dark = document.createElement('div')
    dark.classList.add('chroma', 'dark')
    const sapphire = document.createElement('div')
    sapphire.classList.add('chroma', 'sapphire')
    const rainbow = document.createElement('div')
    rainbow.classList.add('chroma', 'rainbow')
    const turquoise = document.createElement('div')
    turquoise.classList.add('chroma', 'turquoise')
    const underground = document.createElement('div')
    underground.classList.add('chroma', 'underground')
    const reckoning = document.createElement('div')
    reckoning.classList.add('chroma', 'reckoning')
    const freestyle = document.createElement('div')
    freestyle.classList.add('chroma', 'freestyle')
    const jasper = document.createElement('div')
    jasper.classList.add('chroma', 'jasper')
    const sweet = document.createElement('div')
    sweet.classList.add('chroma', 'sweet')
    const ko = document.createElement('div')
    ko.classList.add('chroma', 'ko')
    const granite = document.createElement('div')
    granite.classList.add('chroma', 'granite')
    const emberclaw = document.createElement('div')
    emberclaw.classList.add('chroma', 'emberclaw')

    // ahri selectors
    const ahriPage = document.querySelector('.ahri')

    const ahriCheckboxes = document.querySelector('.ahri-checkboxes')
    const midformSwitch = document.createElement('input')
    midformSwitch.type = "checkbox"
    midformSwitch.classList.add('switcher')
    midformSwitch.id = "midform-switch"
    midformSwitch.checked = true
    const midformLabel = document.createElement('label')
    midformLabel.classList.add('switcher-label')
    midformLabel.htmlFor = "midform-switch"
    midformLabel.appendChild(document.createTextNode('Midform'))

    const ahriBase = document.querySelector('.ahri-base')
    const ahriDinasty = document.querySelector('.ahri-dinasty')
    const ahriMidnight = document.querySelector('.ahri-midnight')
    const ahriFoxfire = document.querySelector('.ahri-foxfire')
    const ahriPopstar = document.querySelector('.ahri-popstar')
    const ahriChallenger = document.querySelector('.ahri-challenger')
    const ahriAcademy = document.querySelector('.ahri-academy')
    const ahriArcade = document.querySelector('.ahri-arcade')
    const ahriStarGuardian = document.querySelector('.ahri-star-guardian')
    const ahriKDA = document.querySelector('.ahri-kda')
    const ahriKDAPrestige = document.querySelector('.ahri-kda-prestige')
    const ahriElderwood = document.querySelector('.ahri-elderwood')
    const ahriSpiritBlossom = document.querySelector('.ahri-spirit-blossom')
    const ahriKDAAllOut = document.querySelector('.ahri-kda-all-out')
    const ahriCoven = document.querySelector('.ahri-coven')

    const ahriChromas = document.querySelector('.chromas-ahri')
    const ahriversary = document.querySelector('.ahriversary')
    const noChromaAhri = document.querySelector('.og-ahri')

    // akali selectors
    const akaliPage = document.querySelector('.akali')

    const akaliCheckboxes = document.querySelector('.akali-checkboxes')
    const akaliMaskSwitch = document.createElement('input')
    akaliMaskSwitch.type = "checkbox"
    akaliMaskSwitch.classList.add('switcher')
    akaliMaskSwitch.id = "akali-mask-switch"
    akaliMaskSwitch.checked = true
    const akaliMaskLabel = document.createElement('label')
    akaliMaskLabel.classList.add('switcher-label')
    akaliMaskLabel.htmlFor = "akali-mask-switch"
    akaliMaskLabel.appendChild(document.createTextNode('Mask'))

    const akaliBase = document.querySelector('.akali-base')
    const akaliStinger = document.querySelector('.akali-stinger')
    const akaliInfernal = document.querySelector('.akali-infernal')
    const akaliAllStar = document.querySelector('.akali-all-star')
    const akaliNurse = document.querySelector('.akali-nurse')
    const akaliBloodMoon = document.querySelector('.akali-blood-moon')
    const akaliSilverfang = document.querySelector('.akali-silverfang')
    const akaliHeadhunter = document.querySelector('.akali-headhunter')
    const akaliSashimi = document.querySelector('.akali-sashimi')
    const akaliKDA = document.querySelector('.akali-kda')
    const akaliKDAPrestige = document.querySelector('.akali-kda-prestige')
    const akaliProject = document.querySelector('.akali-project')
    const akaliTrueDamage = document.querySelector('.akali-true-damage')
    const akaliKDAAllOut = document.querySelector('.akali-kda-all-out')
    const akaliCrimeCityNightmare = document.querySelector('.akali-crime-city-nightmare')

    const akaliChromas = document.querySelector('.chromas-akali')
    const noChromaAkali = document.querySelector('.og-akali')

    // evelynn selectors
    const evelynnPage = document.querySelector('.evelynn')

    const evelynnCheckboxes = document.querySelector('.evelynn-checkboxes')
    const evelynnMaskSwitch = document.createElement('input')
    evelynnMaskSwitch.type = "checkbox"
    evelynnMaskSwitch.classList.add('switcher')
    evelynnMaskSwitch.id = "evelynn-mask-switch"
    evelynnMaskSwitch.checked = true
    const evelynnMaskLabel = document.createElement('label')
    evelynnMaskLabel.classList.add('switcher-label')
    evelynnMaskLabel.htmlFor = "evelynn-mask-switch"
    evelynnMaskLabel.appendChild(document.createTextNode('Mask'))

    const evelynnGlassesSwitch = document.createElement('input')
    evelynnGlassesSwitch.type = "checkbox"
    evelynnGlassesSwitch.classList.add('switcher')
    evelynnGlassesSwitch.id = "evelynn-glasses-switch"
    evelynnGlassesSwitch.checked = true
    const evelynnGlassesLabel = document.createElement('label')
    evelynnGlassesLabel.classList.add('switcher-label')
    evelynnGlassesLabel.htmlFor = "evelynn-glasses-switch"
    evelynnGlassesLabel.appendChild(document.createTextNode('Glasses'))

    const evelynnBase = document.querySelector('.evelynn-base')
    const evelynnShadow = document.querySelector('.evelynn-shadow')
    const evelynnMasquerade = document.querySelector('.evelynn-masquerade')
    const evelynnTango = document.querySelector('.evelynn-tango')
    const evelynnSafecracker = document.querySelector('.evelynn-safecracker')
    const evelynnBloodMoon= document.querySelector('.evelynn-blood-moon')
    const evelynnKDA = document.querySelector('.evelynn-kda')
    const evelynnKDAPrestige = document.querySelector('.evelynn-kda-prestige')
    const evelynnSugarRush = document.querySelector('.evelynn-sugar-rush')
    const evelynnKDAAllOut = document.querySelector('.evelynn-kda-all-out')
    const evelynnCoven = document.querySelector('.evelynn-coven')

    const evelynnChromas = document.querySelector('.chromas-evelynn')
    const noChromaEvelynn = document.querySelector('.og-evelynn')

    // kaisa selectors
    const kaisaPage = document.querySelector('.kaisa')

    const kaisaCheckboxes = document.querySelector('.kaisa-checkboxes')
    const kaisaHelmetSwitch = document.createElement('input')
    kaisaHelmetSwitch.type = "checkbox"
    kaisaHelmetSwitch.classList.add('switcher')
    kaisaHelmetSwitch.id = "kaisa-helmet-switch"
    kaisaHelmetSwitch.checked = true
    const kaisaHelmetLabel = document.createElement('label')
    kaisaHelmetLabel.classList.add('switcher-label')
    kaisaHelmetLabel.htmlFor = "kaisa-helmet-switch"
    kaisaHelmetLabel.appendChild(document.createTextNode('Helmet'))

    const kaisaPistolsSwitch = document.createElement('input')
    kaisaPistolsSwitch.type = "checkbox"
    kaisaPistolsSwitch.classList.add('switcher')
    kaisaPistolsSwitch.id = "kaisa-pistols-switch"
    kaisaPistolsSwitch.checked = true
    const kaisaPistolsLabel = document.createElement('label')
    kaisaPistolsLabel.classList.add('switcher-label')
    kaisaPistolsLabel.htmlFor = "kaisa-pistols-switch"
    kaisaPistolsLabel.appendChild(document.createTextNode('Pistols'))

    const kaisaBase = document.querySelector('.kaisa-base')
    const kaisaBulletAngel = document.querySelector('.kaisa-bullet-angel')
    const kaisaKDA = document.querySelector('.kaisa-kda')
    const kaisaKDAPrestige = document.querySelector('.kaisa-kda-prestige')
    const kaisaIG = document.querySelector('.kaisa-ig')
    const kaisaArcade = document.querySelector('.kaisa-arcade')
    const kaisaKDAAllOut = document.querySelector('.kaisa-kda-all-out')
    const kaisaKDAAllOutPrestige = document.querySelector('.kaisa-kda-all-out-prestige')
    const kaisaLagoonDragon = document.querySelector('.kaisa-lagoon-dragon')


    const kaisaChromas = document.querySelector('.chromas-kaisa')
    const noChromaKaisa = document.querySelector('.og-kaisa')

    // seraphine selectors
    const seraphinePage = document.querySelector('.seraphine')

    const seraphineBase = document.querySelector('.seraphine-base')
    const seraphineKDAAllOutIndie = document.querySelector('.seraphine-kda-all-out-indie')
    const seraphineKDAAllOutRisingStar = document.querySelector('.seraphine-kda-all-out-rising-star')
    const seraphineKDAAllOut = document.querySelector('.seraphine-kda-all-out')
    const seraphineGracefulPhoenix = document.querySelector('.seraphine-graceful-phoenix')

    const seraphineChromas = document.querySelector('.chromas-seraphine')
    const noChromaSeraphine = document.querySelector('.og-seraphine')

    // AHRI
    ahriSelectors.forEach(ahriSelector => {ahriSelector.addEventListener('click', () => {
        scene.remove(scene.children[1])
        canvas.style.pointerEvents = "all"
        akaliPage.style.opacity = '0'
        akaliPage.style.pointerEvents = 'none'
        evelynnPage.style.opacity = '0'
        evelynnPage.style.pointerEvents = 'none'
        kaisaPage.style.opacity = '0'
        kaisaPage.style.pointerEvents = 'none'
        seraphinePage.style.opacity = '0'
        seraphinePage.style.pointerEvents = 'none'

        // page setup
        ahriPage.style.opacity = '1'
        ahriPage.style.pointerEvents = 'all'
        root.style.setProperty('--primary', "#d12524")
        root.style.setProperty('--secondary', "#5779bb")
        root.style.setProperty('--background', "#25192b")
        chromas.style.display = 'none'
        ahriCheckboxes.style.display = 'none'

        // skin selection
        for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
        ahriBase.classList.add('skin-active')
        ahriBase.scrollIntoView({ behavior: 'smooth', })

        // load model
        gltfLoader.load(
            'models/ahri/ahri-base.glb',
            (gltf) => {
                scene.remove(scene.children[1])
                gltf.scene.scale.set(0.019, 0.019, 0.019)
                gltf.scene.position.set(0, -1.2, 0)
                scene.add(gltf.scene)
            }
        )
        
        // AHRI BASE
        ahriBase.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriBase.classList.add('skin-active')
            ahriBase.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'

            // load model
            gltfLoader.load(
                'models/ahri/ahri-base.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            chromas.style.display = 'none'
        })

        // AHRI DINASTY
        ahriDinasty.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])

            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriDinasty.classList.add('skin-active')
            ahriDinasty.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'

            // textures
            const ahriDinastyTexture = textureLoader.load('models/ahri/textures/ahri-dinasty/ahri-dinasty.png')
            ahriDinastyTexture.flipY = false
            ahriDinastyTexture.encoding = THREE.sRGBEncoding

            const ahriDinastyAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-dinasty/ahri-dinasty-ahriversary.png')
            ahriDinastyAhriversaryTexture.flipY = false
            ahriDinastyAhriversaryTexture.encoding = THREE.sRGBEncoding

            // materials
            const ahriDinastyMaterial = new THREE.MeshBasicMaterial({map: ahriDinastyTexture})

            // model
            gltfLoader.load(
                'models/ahri/ahri-dinasty.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriDinastyMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriDinastyMesh.material = ahriDinastyMaterial

                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            ahriChromas.style.display = 'block'

            ruby.remove()
            catseye.remove()
            citrine.remove()
            rose.remove()
            amethyst.remove()
            pearl.remove()
            golden.remove()
            obsidian.remove()
            aquamarine.remove()
            peridot.remove()
            night.remove()
            baddest.remove()
            emerald.remove()
            tanzanite.remove()
            dark.remove()
            sapphire.remove()

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')

            noChromaAhri.addEventListener('click', () => {
                ahriDinastyMaterial.map = ahriDinastyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })

            ahriversary.addEventListener('click', () => {
                ahriDinastyMaterial.map = ahriDinastyAhriversaryTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })
        })

        // AHRI MIDNIGHT
        ahriMidnight.addEventListener('click', () => {
            //page set up
            scene.remove(scene.children[1])

            //skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriMidnight.classList.add('skin-active')
            ahriMidnight.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'

            //textures
            const ahriMidnightTexture = textureLoader.load('models/ahri/textures/ahri-midnight/midnight.png')
            ahriMidnightTexture.flipY = false
            ahriMidnightTexture.encoding = THREE.sRGBEncoding

            const ahriMidnightAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-midnight/midnight-ahriversary.png')
            ahriMidnightAhriversaryTexture.flipY = false
            ahriMidnightAhriversaryTexture.encoding = THREE.sRGBEncoding

            // material
            const ahriMidnightMaterial = new THREE.MeshBasicMaterial({map: ahriMidnightTexture})

            //model
            gltfLoader.load(
                'models/ahri/ahri-midnight.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriMidnightMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriMidnightMesh.material = ahriMidnightMaterial

                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            ahriChromas.style.display = 'block'

            ruby.remove()
            catseye.remove()
            citrine.remove()
            rose.remove()
            amethyst.remove()
            pearl.remove()
            golden.remove()
            obsidian.remove()
            aquamarine.remove()
            peridot.remove()
            night.remove()

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')

            noChromaAhri.addEventListener('click', () => {
                ahriMidnightMaterial.map = ahriMidnightTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })

            ahriversary.addEventListener('click', () => {
                ahriMidnightMaterial.map = ahriMidnightAhriversaryTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })
        })

        // AHRI FOXFIRE
        ahriFoxfire.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])

            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriFoxfire.classList.add('skin-active')
            ahriFoxfire.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'

            // textures
            const ahriFoxfireTexture = textureLoader.load('models/ahri/textures/ahri-foxfire/foxfire.png')
            ahriFoxfireTexture.flipY = false
            ahriFoxfireTexture.encoding = THREE.sRGBEncoding

            const ahriFoxfireAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-foxfire/foxfire-ahriversary.png')
            ahriFoxfireAhriversaryTexture.flipY = false
            ahriFoxfireAhriversaryTexture.encoding = THREE.sRGBEncoding

            // materials
            const ahriFoxfireMaterial = new THREE.MeshBasicMaterial({map: ahriFoxfireTexture})

            // model
            gltfLoader.load(
                'models/ahri/ahri-foxfire.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriFoxfireMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriFoxfireMesh.material = ahriFoxfireMaterial

                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            ahriChromas.style.display = 'block'

            ruby.remove()
            catseye.remove()
            citrine.remove()
            rose.remove()
            amethyst.remove()
            pearl.remove()
            golden.remove()
            obsidian.remove()
            aquamarine.remove()
            peridot.remove()
            night.remove()
            baddest.remove()
            emerald.remove()
            tanzanite.remove()
            dark.remove()
            sapphire.remove()

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')

            noChromaAhri.addEventListener('click', () => {
                ahriFoxfireMaterial.map = ahriFoxfireTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })

            ahriversary.addEventListener('click', () => {
                ahriFoxfireMaterial.map = ahriFoxfireAhriversaryTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })
        })

        // AHRI POPSTAR
        ahriPopstar.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])

            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriPopstar.classList.add('skin-active')
            ahriPopstar.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'

            // textures
            const ahriPopstarTexture = textureLoader.load('models/ahri/textures/ahri-popstar/popstar.png')
            ahriPopstarTexture.flipY = false
            ahriPopstarTexture.encoding = THREE.sRGBEncoding

            const ahriPopstarAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-popstar/popstar-ahriversary.png')
            ahriPopstarAhriversaryTexture.flipY = false
            ahriPopstarAhriversaryTexture.encoding = THREE.sRGBEncoding

            const ahriPopstarRubyTexture = textureLoader.load('models/ahri/textures/ahri-popstar/popstar-ruby.png')
            ahriPopstarRubyTexture.flipY = false
            ahriPopstarRubyTexture.encoding = THREE.sRGBEncoding

            const ahriPopstarCatseyeTexture = textureLoader.load('models/ahri/textures/ahri-popstar/popstar-catseye.png')
            ahriPopstarCatseyeTexture.flipY = false
            ahriPopstarCatseyeTexture.encoding = THREE.sRGBEncoding

            const ahriPopstarCitrineTexture = textureLoader.load('models/ahri/textures/ahri-popstar/popstar-citrine.png')
            ahriPopstarCitrineTexture.flipY = false
            ahriPopstarCitrineTexture.encoding = THREE.sRGBEncoding

            const ahriPopstarRoseTexture = textureLoader.load('models/ahri/textures/ahri-popstar/popstar-rose.png')
            ahriPopstarRoseTexture.flipY = false
            ahriPopstarRoseTexture.encoding = THREE.sRGBEncoding

            const ahriPopstarAmethystTexture = textureLoader.load('models/ahri/textures/ahri-popstar/popstar-amethyst.png')
            ahriPopstarAmethystTexture.flipY = false
            ahriPopstarAmethystTexture.encoding = THREE.sRGBEncoding

            const ahriPopstarPearlTexture = textureLoader.load('models/ahri/textures/ahri-popstar/popstar-pearl.png')
            ahriPopstarPearlTexture.flipY = false
            ahriPopstarPearlTexture.encoding = THREE.sRGBEncoding

            // materials
            const ahriPopstarMaterial = new THREE.MeshBasicMaterial({map: ahriPopstarTexture})

            // model
            gltfLoader.load(
                'models/ahri/ahri-popstar.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriPopstarMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriPopstarMesh.material = ahriPopstarMaterial

                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
            
            // chromas
            ahriChromas.style.display = 'block'
            ahriChromas.appendChild(ruby)
            ahriChromas.appendChild(catseye)
            ahriChromas.appendChild(citrine)
            ahriChromas.appendChild(rose)
            ahriChromas.appendChild(amethyst)
            ahriChromas.appendChild(pearl)

            golden.remove()
            obsidian.remove()
            aquamarine.remove()
            peridot.remove()
            night.remove()
            baddest.remove()
            emerald.remove()
            tanzanite.remove()
            dark.remove()
            sapphire.remove()
            
            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')

            noChromaAhri.addEventListener('click', () => {
                ahriPopstarMaterial.map = ahriPopstarTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })

            ahriversary.addEventListener('click', () => {
                ahriPopstarMaterial.map = ahriPopstarAhriversaryTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                ahriPopstarMaterial.map = ahriPopstarRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })

            catseye.addEventListener('click', () => {
                ahriPopstarMaterial.map = ahriPopstarCatseyeTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                catseye.classList.add('active-chroma')
            })

            citrine.addEventListener('click', () => {
                ahriPopstarMaterial.map = ahriPopstarCitrineTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                citrine.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                ahriPopstarMaterial.map = ahriPopstarRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            amethyst.addEventListener('click', () => {
                ahriPopstarMaterial.map = ahriPopstarAmethystTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                amethyst.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                ahriPopstarMaterial.map = ahriPopstarPearlTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })
        })

        // AHRI CHALLENGER
        ahriChallenger.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])

            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriChallenger.classList.add('skin-active')
            ahriChallenger.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'

            // textures
            const ahriChallengerTexture = textureLoader.load('models/ahri/textures/ahri-challenger/challenger.png')
            ahriChallengerTexture.flipY = false
            ahriChallengerTexture.encoding = THREE.sRGBEncoding

            const ahriChallengerAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-challenger/challenger-ahriversary.png')
            ahriChallengerAhriversaryTexture.flipY = false
            ahriChallengerAhriversaryTexture.encoding = THREE.sRGBEncoding

            const ahriChallengerGoldenTexture = textureLoader.load('models/ahri/textures/ahri-challenger/challenger-golden.png')
            ahriChallengerGoldenTexture.flipY = false
            ahriChallengerGoldenTexture.encoding = THREE.sRGBEncoding

            // materials
            const ahriChallengerMaterial = new THREE.MeshBasicMaterial({map: ahriChallengerTexture})

            // model
            gltfLoader.load(
                'models/ahri/ahri-challenger.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriChallengerMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriChallengerMesh.material = ahriChallengerMaterial

                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            ahriChromas.style.display = 'block'
            ahriChromas.appendChild(golden)

            ruby.remove()
            catseye.remove()
            citrine.remove()
            rose.remove()
            amethyst.remove()
            pearl.remove()
            obsidian.remove()
            aquamarine.remove()
            peridot.remove()
            night.remove()
            baddest.remove()
            emerald.remove()
            tanzanite.remove()
            dark.remove()
            sapphire.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')

            noChromaAhri.addEventListener('click', () => {
                ahriChallengerMaterial.map = ahriChallengerTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })

            ahriversary.addEventListener('click', () => {
                ahriChallengerMaterial.map = ahriChallengerAhriversaryTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })

            golden.addEventListener('click', () => {
                ahriChallengerMaterial.map = ahriChallengerGoldenTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                golden.classList.add('active-chroma')
            })
        })

        // AHRI ACADEMY
        ahriAcademy.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])

            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriAcademy.classList.add('skin-active')
            ahriAcademy.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'

            // textures
            const ahriAcademyTexture = textureLoader.load('models/ahri/textures/ahri-academy/academy.png')
            ahriAcademyTexture.flipY = false
            ahriAcademyTexture.encoding = THREE.sRGBEncoding

            const ahriAcademyAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-academy/academy-ahriversary.png')
            ahriAcademyAhriversaryTexture.flipY = false
            ahriAcademyAhriversaryTexture.encoding = THREE.sRGBEncoding

            // materials
            const ahriAcademyMaterial = new THREE.MeshBasicMaterial({map: ahriAcademyTexture})

            // model
            gltfLoader.load(
                'models/ahri/ahri-academy.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriAcademyMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriAcademyMesh.material = ahriAcademyMaterial

                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            ahriChromas.style.display = 'block'

            ruby.remove()
            catseye.remove()
            citrine.remove()
            rose.remove()
            amethyst.remove()
            pearl.remove()
            golden.remove()
            obsidian.remove()
            aquamarine.remove()
            peridot.remove()
            night.remove()
            baddest.remove()
            emerald.remove()
            tanzanite.remove()
            dark.remove()
            sapphire.remove()

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')

            noChromaAhri.addEventListener('click', () => {
                ahriAcademyMaterial.map = ahriAcademyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })

            ahriversary.addEventListener('click', () => {
                ahriAcademyMaterial.map = ahriAcademyAhriversaryTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })
        })

        // AHRI ARCADE
        ahriArcade.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])
        
            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriArcade.classList.add('skin-active')
            ahriArcade.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'
        
            // textures
            const ahriArcadeTexture = textureLoader.load('models/ahri/textures/ahri-arcade/arcade.png')
            ahriArcadeTexture.flipY = false
            ahriArcadeTexture.encoding = THREE.sRGBEncoding
        
            const ahriArcadeAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-arcade/arcade-ahriversary.png')
            ahriArcadeAhriversaryTexture.flipY = false
            ahriArcadeAhriversaryTexture.encoding = THREE.sRGBEncoding
        
            // materials
            const ahriArcadeMaterial = new THREE.MeshBasicMaterial({map: ahriArcadeTexture})
        
            // model
            gltfLoader.load(
                'models/ahri/ahri-arcade.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriArcadeMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriArcadeMesh.material = ahriArcadeMaterial
        
                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
        
            // chromas
            ahriChromas.style.display = 'block'
        
            ruby.remove()
            catseye.remove()
            citrine.remove()
            rose.remove()
            amethyst.remove()
            pearl.remove()
            golden.remove()
            obsidian.remove()
            aquamarine.remove()
            peridot.remove()
            night.remove()
            baddest.remove()
            emerald.remove()
            tanzanite.remove()
            dark.remove()
            sapphire.remove()
        
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')
        
            noChromaAhri.addEventListener('click', () => {
                ahriArcadeMaterial.map = ahriArcadeTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })
        
            ahriversary.addEventListener('click', () => {
                ahriArcadeMaterial.map = ahriArcadeAhriversaryTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })
        })

        // AHRI STAR GUARDIAN
        ahriStarGuardian.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])
        
            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriStarGuardian.classList.add('skin-active')
            ahriStarGuardian.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'
        
            // textures
            const ahriStarGuardianTexture = textureLoader.load('models/ahri/textures/ahri-star-guardian/star-guardian.png')
            ahriStarGuardianTexture.flipY = false
            ahriStarGuardianTexture.encoding = THREE.sRGBEncoding
        
            const ahriStarGuardianTailsTexture = textureLoader.load('models/ahri/textures/ahri-star-guardian/tails.png')
            ahriStarGuardianTailsTexture.flipY = false
            ahriStarGuardianTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriStarGuardianAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-star-guardian/star-guardian-ahriversary.png')
            ahriStarGuardianAhriversaryTexture.flipY = false
            ahriStarGuardianAhriversaryTexture.encoding = THREE.sRGBEncoding
        
            const ahriStarGuardianAhriversaryTailsTexture = textureLoader.load('models/ahri/textures/ahri-star-guardian/tails-ahriversary.png')
            ahriStarGuardianAhriversaryTailsTexture.flipY = false
            ahriStarGuardianAhriversaryTailsTexture.encoding = THREE.sRGBEncoding
        
            // materials
            const ahriStarGuardianMaterial = new THREE.MeshBasicMaterial({map: ahriStarGuardianTexture})
            const ahriStarGuardianTailsMaterial = new THREE.MeshBasicMaterial({map: ahriStarGuardianTailsTexture})
        
            // model
            gltfLoader.load(
                'models/ahri/ahri-star-guardian.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriStarGuardianMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriStarGuardianMesh.material = ahriStarGuardianMaterial
        
                    const ahriStarGuardianTailsMesh = gltf.scene.children[0].children.find(child => child.name === 'tails')
                    ahriStarGuardianTailsMesh.material = ahriStarGuardianTailsMaterial
        
                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
        
            // chromas
            ahriChromas.style.display = 'block'
        
            ruby.remove()
            catseye.remove()
            citrine.remove()
            rose.remove()
            amethyst.remove()
            pearl.remove()
            golden.remove()
            obsidian.remove()
            aquamarine.remove()
            peridot.remove()
            night.remove()
            baddest.remove()
            emerald.remove()
            tanzanite.remove()
            dark.remove()
            sapphire.remove()
        
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')
        
            noChromaAhri.addEventListener('click', () => {
                ahriStarGuardianMaterial.map = ahriStarGuardianTexture
                ahriStarGuardianTailsMaterial.map = ahriStarGuardianTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })
        
            ahriversary.addEventListener('click', () => {
                ahriStarGuardianMaterial.map = ahriStarGuardianAhriversaryTexture
                ahriStarGuardianTailsMaterial.map = ahriStarGuardianAhriversaryTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })
        })

        // AHRI KDA
        ahriKDA.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])
        
            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriKDA.classList.add('skin-active')
            ahriKDA.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'
        
            // textures
            const ahriKDATexture = textureLoader.load('models/ahri/textures/ahri-kda/kda.png')
            ahriKDATexture.flipY = false
            ahriKDATexture.encoding = THREE.sRGBEncoding
        
            const ahriKDATailsTexture = textureLoader.load('models/ahri/textures/ahri-kda/tails.png')
            ahriKDATailsTexture.flipY = false
            ahriKDATailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriKDAAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-kda/kda-ahriversary.png')
            ahriKDAAhriversaryTexture.flipY = false
            ahriKDAAhriversaryTexture.encoding = THREE.sRGBEncoding
        
            // materials
            const ahriKDAMaterial = new THREE.MeshBasicMaterial({map: ahriKDATexture})
            const ahriKDATailsMaterial = new THREE.MeshBasicMaterial({map: ahriKDATailsTexture})
        
            // model
            gltfLoader.load(
                'models/ahri/ahri-kda.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriKDAMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriKDAMesh.material = ahriKDAMaterial
        
                    const ahriKDATailsMesh = gltf.scene.children[0].children.find(child => child.name === 'tails') 
                    ahriKDATailsMesh.material = ahriKDATailsMaterial
        
                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
        
            // chromas
            ahriChromas.style.display = 'block'
        
            ruby.remove()
            catseye.remove()
            citrine.remove()
            rose.remove()
            amethyst.remove()
            pearl.remove()
            golden.remove()
            obsidian.remove()
            aquamarine.remove()
            peridot.remove()
            night.remove()
            baddest.remove()
            emerald.remove()
            tanzanite.remove()
            dark.remove()
            sapphire.remove()
        
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')
        
            noChromaAhri.addEventListener('click', () => {
                ahriKDAMaterial.map = ahriKDATexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })
        
            ahriversary.addEventListener('click', () => {
                ahriKDAMaterial.map = ahriKDAAhriversaryTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })
        })

        // AHRI KDA PRESTIGE
        ahriKDAPrestige.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])
        
            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriKDAPrestige.classList.add('skin-active')
            ahriKDAPrestige.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'
        
            // load model
            gltfLoader.load(
                'models/ahri/ahri-kda-prestige.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
        
            // chromas
            chromas.style.display = 'none'
        })

        // AHRI ELDERWOOD
        ahriElderwood.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])
        
            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriElderwood.classList.add('skin-active')
            ahriElderwood.scrollIntoView({ behavior: 'smooth', })

            ahriCheckboxes.style.display = 'none'
        
            // textures
            const ahriElderwoodTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/elderwood.png')
            ahriElderwoodTexture.flipY = false
            ahriElderwoodTexture.encoding = THREE.sRGBEncoding
            const ahriElderwoodTailsTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/tails.png')
            ahriElderwoodTailsTexture.flipY = false
            ahriElderwoodTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriElderwoodAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/ahriversary/elderwood.png')
            ahriElderwoodAhriversaryTexture.flipY = false
            ahriElderwoodAhriversaryTexture.encoding = THREE.sRGBEncoding
            const ahriElderwoodAhriversaryTailsTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/ahriversary/tails.png')
            ahriElderwoodAhriversaryTailsTexture.flipY = false
            ahriElderwoodAhriversaryTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriElderwoodRubyTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/ruby/elderwood.png')
            ahriElderwoodRubyTexture.flipY = false
            ahriElderwoodRubyTexture.encoding = THREE.sRGBEncoding
            const ahriElderwoodRubyTailsTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/ruby/tails.png')
            ahriElderwoodRubyTailsTexture.flipY = false
            ahriElderwoodRubyTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriElderwoodCatseyeTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/catseye/elderwood.png')
            ahriElderwoodCatseyeTexture.flipY = false
            ahriElderwoodCatseyeTexture.encoding = THREE.sRGBEncoding
            const ahriElderwoodCatseyeTailsTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/catseye/tails.png')
            ahriElderwoodCatseyeTailsTexture.flipY = false
            ahriElderwoodCatseyeTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriElderwoodCitrineTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/citrine/elderwood.png')
            ahriElderwoodCitrineTexture.flipY = false
            ahriElderwoodCitrineTexture.encoding = THREE.sRGBEncoding
            const ahriElderwoodCitrineTailsTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/citrine/tails.png')
            ahriElderwoodCitrineTailsTexture.flipY = false
            ahriElderwoodCitrineTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriElderwoodRoseTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/rose/elderwood.png')
            ahriElderwoodRoseTexture.flipY = false
            ahriElderwoodRoseTexture.encoding = THREE.sRGBEncoding
            const ahriElderwoodRoseTailsTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/rose/tails.png')
            ahriElderwoodRoseTailsTexture.flipY = false
            ahriElderwoodRoseTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriElderwoodAmethystTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/amethyst/elderwood.png')
            ahriElderwoodAmethystTexture.flipY = false
            ahriElderwoodAmethystTexture.encoding = THREE.sRGBEncoding
            const ahriElderwoodAmethystTailsTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/amethyst/tails.png')
            ahriElderwoodAmethystTailsTexture.flipY = false
            ahriElderwoodAmethystTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriElderwoodObsidianTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/obsidian/elderwood.png')
            ahriElderwoodObsidianTexture.flipY = false
            ahriElderwoodObsidianTexture.encoding = THREE.sRGBEncoding
            const ahriElderwoodObsidianTailsTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/obsidian/tails.png')
            ahriElderwoodObsidianTailsTexture.flipY = false
            ahriElderwoodObsidianTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriElderwoodAquamarineTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/aquamarine/elderwood.png')
            ahriElderwoodAquamarineTexture.flipY = false
            ahriElderwoodAquamarineTexture.encoding = THREE.sRGBEncoding
            const ahriElderwoodAquamarineTailsTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/aquamarine/tails.png')
            ahriElderwoodAquamarineTailsTexture.flipY = false
            ahriElderwoodAquamarineTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriElderwoodPeridotTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/peridot/elderwood.png')
            ahriElderwoodPeridotTexture.flipY = false
            ahriElderwoodPeridotTexture.encoding = THREE.sRGBEncoding
            const ahriElderwoodPeridotTailsTexture = textureLoader.load('models/ahri/textures/ahri-elderwood/peridot/tails.png')
            ahriElderwoodPeridotTailsTexture.flipY = false
            ahriElderwoodPeridotTailsTexture.encoding = THREE.sRGBEncoding
        
            // materials
            const ahriElderwoodMaterial = new THREE.MeshBasicMaterial({map: ahriElderwoodTexture})
            const ahriElderwoodTailsMaterial = new THREE.MeshBasicMaterial({map: ahriElderwoodTailsTexture})
        
            // model
            gltfLoader.load(
                'models/ahri/ahri-elderwood.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriElderwoodMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriElderwoodMesh.material = ahriElderwoodMaterial
                    const ahriElderwoodTailsMesh = gltf.scene.children[0].children.find(child => child.name === 'tails') 
                    ahriElderwoodTailsMesh.material = ahriElderwoodTailsMaterial
        
                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
            
            // chromas
            ahriChromas.style.display = 'block'
            ahriChromas.appendChild(ruby)
            ahriChromas.appendChild(catseye)
            ahriChromas.appendChild(citrine)
            ahriChromas.appendChild(rose)
            ahriChromas.appendChild(amethyst)
            ahriChromas.appendChild(obsidian)
            ahriChromas.appendChild(aquamarine)
            ahriChromas.appendChild(peridot)
        
            golden.remove()
            pearl.remove()
            night.remove()
            baddest.remove()
            emerald.remove()
            tanzanite.remove()
            dark.remove()
            sapphire.remove()
            
            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')
        
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')
        
            noChromaAhri.addEventListener('click', () => {
                ahriElderwoodMaterial.map = ahriElderwoodTexture
                ahriElderwoodTailsMaterial.map = ahriElderwoodTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })
        
            ahriversary.addEventListener('click', () => {
                ahriElderwoodMaterial.map = ahriElderwoodAhriversaryTexture
                ahriElderwoodTailsMaterial.map = ahriElderwoodAhriversaryTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })
        
            ruby.addEventListener('click', () => {
                ahriElderwoodMaterial.map = ahriElderwoodRubyTexture
                ahriElderwoodTailsMaterial.map = ahriElderwoodRubyTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })
        
            catseye.addEventListener('click', () => {
                ahriElderwoodMaterial.map = ahriElderwoodCatseyeTexture
                ahriElderwoodTailsMaterial.map = ahriElderwoodCatseyeTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                catseye.classList.add('active-chroma')
            })
        
            citrine.addEventListener('click', () => {
                ahriElderwoodMaterial.map = ahriElderwoodCitrineTexture
                ahriElderwoodTailsMaterial.map = ahriElderwoodCitrineTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                citrine.classList.add('active-chroma')
            })
        
            rose.addEventListener('click', () => {
                ahriElderwoodMaterial.map = ahriElderwoodRoseTexture
                ahriElderwoodTailsMaterial.map = ahriElderwoodRoseTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })
        
            amethyst.addEventListener('click', () => {
                ahriElderwoodMaterial.map = ahriElderwoodAmethystTexture
                ahriElderwoodTailsMaterial.map = ahriElderwoodAmethystTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                amethyst.classList.add('active-chroma')
            })
        
            obsidian.addEventListener('click', () => {
                ahriElderwoodMaterial.map = ahriElderwoodObsidianTexture
                ahriElderwoodTailsMaterial.map = ahriElderwoodObsidianTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })
        
            aquamarine.addEventListener('click', () => {
                ahriElderwoodMaterial.map = ahriElderwoodAquamarineTexture
                ahriElderwoodTailsMaterial.map = ahriElderwoodAquamarineTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                aquamarine.classList.add('active-chroma')
            })
        
            peridot.addEventListener('click', () => {
                ahriElderwoodMaterial.map = ahriElderwoodPeridotTexture
                ahriElderwoodTailsMaterial.map = ahriElderwoodPeridotTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                peridot.classList.add('active-chroma')
            })
        })

        // AHRI SPIRIT BLOSSOM
        ahriSpiritBlossom.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])
            
            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriSpiritBlossom.classList.add('skin-active')
            ahriSpiritBlossom.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            ahriCheckboxes.style.display = 'block'
            ahriCheckboxes.appendChild(midformSwitch)
            ahriCheckboxes.appendChild(midformLabel)
            midformSwitch.checked = true

            // textures
            const ahriSpiritBlossomTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/spirit-blossom.png')
            ahriSpiritBlossomTexture.flipY = false
            ahriSpiritBlossomTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomTailsTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/tails.png')
            ahriSpiritBlossomTailsTexture.flipY = false
            ahriSpiritBlossomTailsTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomTailTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/tail.png')
            ahriSpiritBlossomTailTexture.flipY = false
            ahriSpiritBlossomTailTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomMidformTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/mid-form.png')
            ahriSpiritBlossomMidformTexture.flipY = false
            ahriSpiritBlossomMidformTexture.encoding = THREE.sRGBEncoding
        
            const ahriSpiritBlossomAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/ahriversary/spirit-blossom.png')
            ahriSpiritBlossomAhriversaryTexture.flipY = false
            ahriSpiritBlossomAhriversaryTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomAhriversaryTailsTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/ahriversary/tails.png')
            ahriSpiritBlossomAhriversaryTailsTexture.flipY = false
            ahriSpiritBlossomAhriversaryTailsTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomAhriversaryTailTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/ahriversary/tail.png')
            ahriSpiritBlossomAhriversaryTailTexture.flipY = false
            ahriSpiritBlossomAhriversaryTailTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomAhriversaryMidformTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/ahriversary/mid-form.png')
            ahriSpiritBlossomAhriversaryMidformTexture.flipY = false
            ahriSpiritBlossomAhriversaryMidformTexture.encoding = THREE.sRGBEncoding
        
            const ahriSpiritBlossomRoseTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/rose/spirit-blossom.png')
            ahriSpiritBlossomRoseTexture.flipY = false
            ahriSpiritBlossomRoseTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomRoseTailsTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/rose/tails.png')
            ahriSpiritBlossomRoseTailsTexture.flipY = false
            ahriSpiritBlossomRoseTailsTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomRoseTailTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/rose/tail.png')
            ahriSpiritBlossomRoseTailTexture.flipY = false
            ahriSpiritBlossomRoseTailTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomRoseMidformTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/rose/mid-form.png')
            ahriSpiritBlossomRoseMidformTexture.flipY = false
            ahriSpiritBlossomRoseMidformTexture.encoding = THREE.sRGBEncoding
        
            const ahriSpiritBlossomPearlTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/pearl/spirit-blossom.png')
            ahriSpiritBlossomPearlTexture.flipY = false
            ahriSpiritBlossomPearlTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomPearlTailsTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/pearl/tails.png')
            ahriSpiritBlossomPearlTailsTexture.flipY = false
            ahriSpiritBlossomPearlTailsTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomPearlTailTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/pearl/tail.png')
            ahriSpiritBlossomPearlTailTexture.flipY = false
            ahriSpiritBlossomPearlTailTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomPearlMidformTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/pearl/mid-form.png')
            ahriSpiritBlossomPearlMidformTexture.flipY = false
            ahriSpiritBlossomPearlMidformTexture.encoding = THREE.sRGBEncoding
            
            const ahriSpiritBlossomObsidianTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/obsidian/spirit-blossom.png')
            ahriSpiritBlossomObsidianTexture.flipY = false
            ahriSpiritBlossomObsidianTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomObsidianTailsTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/obsidian/tails.png')
            ahriSpiritBlossomObsidianTailsTexture.flipY = false
            ahriSpiritBlossomObsidianTailsTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomObsidianTailTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/obsidian/tail.png')
            ahriSpiritBlossomObsidianTailTexture.flipY = false
            ahriSpiritBlossomObsidianTailTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomObsidianMidformTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/obsidian/mid-form.png')
            ahriSpiritBlossomObsidianMidformTexture.flipY = false
            ahriSpiritBlossomObsidianMidformTexture.encoding = THREE.sRGBEncoding
        
            const ahriSpiritBlossomAquamarineTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/aquamarine/spirit-blossom.png')
            ahriSpiritBlossomAquamarineTexture.flipY = false
            ahriSpiritBlossomAquamarineTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomAquamarineTailsTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/aquamarine/tails.png')
            ahriSpiritBlossomAquamarineTailsTexture.flipY = false
            ahriSpiritBlossomAquamarineTailsTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomAquamarineTailTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/aquamarine/tail.png')
            ahriSpiritBlossomAquamarineTailTexture.flipY = false
            ahriSpiritBlossomAquamarineTailTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomAquamarineMidformTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/aquamarine/mid-form.png')
            ahriSpiritBlossomAquamarineMidformTexture.flipY = false
            ahriSpiritBlossomAquamarineMidformTexture.encoding = THREE.sRGBEncoding
        
            const ahriSpiritBlossomNightTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/night/spirit-blossom.png')
            ahriSpiritBlossomNightTexture.flipY = false
            ahriSpiritBlossomNightTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomNightTailsTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/night/tails.png')
            ahriSpiritBlossomNightTailsTexture.flipY = false
            ahriSpiritBlossomNightTailsTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomNightTailTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/night/tail.png')
            ahriSpiritBlossomNightTailTexture.flipY = false
            ahriSpiritBlossomNightTailTexture.encoding = THREE.sRGBEncoding
            const ahriSpiritBlossomNightMidformTexture = textureLoader.load('models/ahri/textures/ahri-spirit-blossom/night/mid-form.png')
            ahriSpiritBlossomNightMidformTexture.flipY = false
            ahriSpiritBlossomNightMidformTexture.encoding = THREE.sRGBEncoding
        
            // materials
            const ahriSpiritBlossomMaterial = new THREE.MeshBasicMaterial({map: ahriSpiritBlossomTexture})
            const ahriSpiritBlossomTailsMaterial = new THREE.MeshBasicMaterial({map: ahriSpiritBlossomTailsTexture})
            const ahriSpiritBlossomTailMaterial = new THREE.MeshBasicMaterial({map: ahriSpiritBlossomTailTexture})
            const ahriSpiritBlossomMidformMaterial = new THREE.MeshBasicMaterial({map: ahriSpiritBlossomMidformTexture})

            // model
            gltfLoader.load(
                'models/ahri/ahri-spirit-blossom.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriSpiritBlossomMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriSpiritBlossomMesh.material = ahriSpiritBlossomMaterial
                    const ahriSpiritBlossomTailsMesh = gltf.scene.children[0].children.find(child => child.name === 'tails') 
                    ahriSpiritBlossomTailsMesh.material = ahriSpiritBlossomTailsMaterial
                    const ahriSpiritBlossomTailMesh = gltf.scene.children[0].children.find(child => child.name === 'tail') 
                    ahriSpiritBlossomTailMesh.material = ahriSpiritBlossomTailMaterial
                    const ahriSpiritBlossomMidformMesh = gltf.scene.children[0].children.find(child => child.name === 'midform') 
                    ahriSpiritBlossomMidformMesh.material = ahriSpiritBlossomMidformMaterial

                    midformSwitch.addEventListener('click', () => {
                        if(midformSwitch.checked) {
                            ahriSpiritBlossomMidformMesh.visible = true
                        } else {
                            ahriSpiritBlossomMidformMesh.visible = false
                        }                  
                    })
                    
                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            ) 

            // chromas
            ahriChromas.style.display = 'block'
            ahriChromas.appendChild(rose)
            ahriChromas.appendChild(pearl)
            ahriChromas.appendChild(obsidian)
            ahriChromas.appendChild(aquamarine)
            ahriChromas.appendChild(night)
        
            golden.remove()
            ruby.remove()
            catseye.remove()
            citrine.remove()
            amethyst.remove()
            peridot.remove()
            baddest.remove()
            emerald.remove()
            tanzanite.remove()
            dark.remove()
            sapphire.remove()
        
        
            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')
        
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')
        
            noChromaAhri.addEventListener('click', () => {
                ahriSpiritBlossomMaterial.map = ahriSpiritBlossomTexture
                ahriSpiritBlossomTailsMaterial.map = ahriSpiritBlossomTailsTexture
                ahriSpiritBlossomTailMaterial.map = ahriSpiritBlossomTailTexture
                ahriSpiritBlossomMidformMaterial.map = ahriSpiritBlossomMidformTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })
        
            ahriversary.addEventListener('click', () => {
                ahriSpiritBlossomMaterial.map = ahriSpiritBlossomAhriversaryTexture
                ahriSpiritBlossomTailsMaterial.map = ahriSpiritBlossomAhriversaryTailsTexture
                ahriSpiritBlossomTailMaterial.map = ahriSpiritBlossomAhriversaryTailTexture
                ahriSpiritBlossomMidformMaterial.map = ahriSpiritBlossomAhriversaryMidformTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })
        
            rose.addEventListener('click', () => {
                ahriSpiritBlossomMaterial.map = ahriSpiritBlossomRoseTexture
                ahriSpiritBlossomTailsMaterial.map = ahriSpiritBlossomRoseTailsTexture
                ahriSpiritBlossomTailMaterial.map = ahriSpiritBlossomRoseTailTexture
                ahriSpiritBlossomMidformMaterial.map = ahriSpiritBlossomRoseMidformTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })
        
            pearl.addEventListener('click', () => {
            ahriSpiritBlossomMaterial.map = ahriSpiritBlossomPearlTexture
            ahriSpiritBlossomTailsMaterial.map = ahriSpiritBlossomPearlTailsTexture
            ahriSpiritBlossomTailMaterial.map = ahriSpiritBlossomPearlTailTexture
            ahriSpiritBlossomMidformMaterial.map = ahriSpiritBlossomPearlMidformTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            pearl.classList.add('active-chroma')
        })
        
            obsidian.addEventListener('click', () => {
                ahriSpiritBlossomMaterial.map = ahriSpiritBlossomObsidianTexture
                ahriSpiritBlossomTailsMaterial.map = ahriSpiritBlossomObsidianTailsTexture
                ahriSpiritBlossomTailMaterial.map = ahriSpiritBlossomObsidianTailTexture
                ahriSpiritBlossomMidformMaterial.map = ahriSpiritBlossomObsidianMidformTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })
        
            aquamarine.addEventListener('click', () => {
                ahriSpiritBlossomMaterial.map = ahriSpiritBlossomAquamarineTexture
                ahriSpiritBlossomTailsMaterial.map = ahriSpiritBlossomAquamarineTailsTexture
                ahriSpiritBlossomTailMaterial.map = ahriSpiritBlossomAquamarineTailTexture
                ahriSpiritBlossomMidformMaterial.map = ahriSpiritBlossomAquamarineMidformTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                aquamarine.classList.add('active-chroma')
            })
        
            night.addEventListener('click', () => {
                ahriSpiritBlossomMaterial.map = ahriSpiritBlossomNightTexture
                ahriSpiritBlossomTailsMaterial.map = ahriSpiritBlossomNightTailsTexture
                ahriSpiritBlossomTailMaterial.map = ahriSpiritBlossomNightTailTexture
                ahriSpiritBlossomMidformMaterial.map = ahriSpiritBlossomNightMidformTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                night.classList.add('active-chroma')
            })
        })

        // AHRI KDA ALL OUT
        ahriKDAAllOut.addEventListener('click', () => {
            // page set up
            scene.remove(scene.children[1])
        
            // skin selection
            for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
            ahriKDAAllOut.classList.add('skin-active')
            ahriKDAAllOut.scrollIntoView({ behavior: 'smooth', })
    
            ahriCheckboxes.style.display = 'none'
        
            // textures
            const ahriKDAAllOutTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/kda-all-out.png')
            ahriKDAAllOutTexture.flipY = false
            ahriKDAAllOutTexture.encoding = THREE.sRGBEncoding
            const ahriKDAAllOutTailsTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/tails.png')
            ahriKDAAllOutTailsTexture.flipY = false
            ahriKDAAllOutTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriKDAAllOutAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/ahriversary/kda-all-out.png')
            ahriKDAAllOutAhriversaryTexture.flipY = false
            ahriKDAAllOutAhriversaryTexture.encoding = THREE.sRGBEncoding
            const ahriKDAAllOutAhriversaryTailsTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/ahriversary/tails.png')
            ahriKDAAllOutAhriversaryTailsTexture.flipY = false
            ahriKDAAllOutAhriversaryTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriKDAAllOutRubyTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/ruby/kda-all-out.png')
            ahriKDAAllOutRubyTexture.flipY = false
            ahriKDAAllOutRubyTexture.encoding = THREE.sRGBEncoding
            const ahriKDAAllOutRubyTailsTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/ruby/tails.png')
            ahriKDAAllOutRubyTailsTexture.flipY = false
            ahriKDAAllOutRubyTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriKDAAllOutRoseTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/rose/kda-all-out.png')
            ahriKDAAllOutRoseTexture.flipY = false
            ahriKDAAllOutRoseTexture.encoding = THREE.sRGBEncoding
            const ahriKDAAllOutRoseTailsTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/rose/tails.png')
            ahriKDAAllOutRoseTailsTexture.flipY = false
            ahriKDAAllOutRoseTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriKDAAllOutAmethystTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/amethyst/kda-all-out.png')
            ahriKDAAllOutAmethystTexture.flipY = false
            ahriKDAAllOutAmethystTexture.encoding = THREE.sRGBEncoding
            const ahriKDAAllOutAmethystTailsTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/amethyst/tails.png')
            ahriKDAAllOutAmethystTailsTexture.flipY = false
            ahriKDAAllOutAmethystTailsTexture.encoding = THREE.sRGBEncoding
    
            const ahriKDAAllOutPearlTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/pearl/kda-all-out.png')
            ahriKDAAllOutPearlTexture.flipY = false
            ahriKDAAllOutPearlTexture.encoding = THREE.sRGBEncoding
            const ahriKDAAllOutPearlTailsTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/pearl/tails.png')
            ahriKDAAllOutPearlTailsTexture.flipY = false
            ahriKDAAllOutPearlTailsTexture.encoding = THREE.sRGBEncoding
        
            const ahriKDAAllOutBaddestTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/baddest/kda-all-out.png')
            ahriKDAAllOutBaddestTexture.flipY = false
            ahriKDAAllOutBaddestTexture.encoding = THREE.sRGBEncoding
            const ahriKDAAllOutBaddestTailsTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/baddest/tails.png')
            ahriKDAAllOutBaddestTailsTexture.flipY = false
            ahriKDAAllOutBaddestTailsTexture.encoding = THREE.sRGBEncoding
    
            const ahriKDAAllOutTarzaniteTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/tanzanite/kda-all-out.png')
            ahriKDAAllOutTarzaniteTexture.flipY = false
            ahriKDAAllOutTarzaniteTexture.encoding = THREE.sRGBEncoding
            const ahriKDAAllOutTarzaniteTailsTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/tanzanite/tails.png')
            ahriKDAAllOutTarzaniteTailsTexture.flipY = false
            ahriKDAAllOutTarzaniteTailsTexture.encoding = THREE.sRGBEncoding
    
            const ahriKDAAllOutAquamarineTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/aquamarine/kda-all-out.png')
            ahriKDAAllOutAquamarineTexture.flipY = false
            ahriKDAAllOutAquamarineTexture.encoding = THREE.sRGBEncoding
            const ahriKDAAllOutAquamarineTailsTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/aquamarine/tails.png')
            ahriKDAAllOutAquamarineTailsTexture.flipY = false
            ahriKDAAllOutAquamarineTailsTexture.encoding = THREE.sRGBEncoding
    
            const ahriKDAAllOutEmeraldTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/emerald/kda-all-out.png')
            ahriKDAAllOutEmeraldTexture.flipY = false
            ahriKDAAllOutEmeraldTexture.encoding = THREE.sRGBEncoding
            const ahriKDAAllOutEmeraldTailsTexture = textureLoader.load('models/ahri/textures/ahri-kda-all-out/emerald/tails.png')
            ahriKDAAllOutEmeraldTailsTexture.flipY = false
            ahriKDAAllOutEmeraldTailsTexture.encoding = THREE.sRGBEncoding
    
        
            // materials
            const ahriKDAAllOutMaterial = new THREE.MeshBasicMaterial({map: ahriKDAAllOutTexture})
            const ahriKDAAllOutTailsMaterial = new THREE.MeshBasicMaterial({map: ahriKDAAllOutTailsTexture})
        
            // model
            gltfLoader.load(
                'models/ahri/ahri-kda-all-out.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    const ahriKDAAllOutMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    ahriKDAAllOutMesh.material = ahriKDAAllOutMaterial
                    const ahriKDAAllOutTailsMesh = gltf.scene.children[0].children.find(child => child.name === 'tails') 
                    ahriKDAAllOutTailsMesh.material = ahriKDAAllOutTailsMaterial
        
                    gltf.scene.scale.set(0.019, 0.019, 0.019)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )
            
            // chromas
            ahriChromas.style.display = 'block'
            ahriChromas.appendChild(ruby)
            ahriChromas.appendChild(rose)
            ahriChromas.appendChild(amethyst)
            ahriChromas.appendChild(pearl)
            ahriChromas.appendChild(baddest)
            ahriChromas.appendChild(tanzanite)
            ahriChromas.appendChild(aquamarine)
            ahriChromas.appendChild(emerald)
        
            golden.remove()
            night.remove()
            catseye.remove()
            citrine.remove()
            golden.remove()
            obsidian.remove()
            peridot.remove()
            night.remove()
            dark.remove()
            sapphire.remove()
            
            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')
        
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')
        
            noChromaAhri.addEventListener('click', () => {
                ahriKDAAllOutMaterial.map = ahriKDAAllOutTexture
                ahriKDAAllOutTailsMaterial.map = ahriKDAAllOutTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAhri.classList.add('active-chroma')
            })
        
            ahriversary.addEventListener('click', () => {
                ahriKDAAllOutMaterial.map = ahriKDAAllOutAhriversaryTexture
                ahriKDAAllOutTailsMaterial.map = ahriKDAAllOutAhriversaryTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ahriversary.classList.add('active-chroma')
            })
        
            ruby.addEventListener('click', () => {
                ahriKDAAllOutMaterial.map = ahriKDAAllOutRubyTexture
                ahriKDAAllOutTailsMaterial.map = ahriKDAAllOutRubyTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })
        
            rose.addEventListener('click', () => {
                ahriKDAAllOutMaterial.map = ahriKDAAllOutRoseTexture
                ahriKDAAllOutTailsMaterial.map = ahriKDAAllOutRoseTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })
        
            amethyst.addEventListener('click', () => {
                ahriKDAAllOutMaterial.map = ahriKDAAllOutAmethystTexture
                ahriKDAAllOutTailsMaterial.map = ahriKDAAllOutAmethystTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                amethyst.classList.add('active-chroma')
            })
        
            pearl.addEventListener('click', () => {
                ahriKDAAllOutMaterial.map = ahriKDAAllOutPearlTexture
                ahriKDAAllOutTailsMaterial.map = ahriKDAAllOutPearlTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })
    
            baddest.addEventListener('click', () => {
            ahriKDAAllOutMaterial.map = ahriKDAAllOutBaddestTexture
            ahriKDAAllOutTailsMaterial.map = ahriKDAAllOutBaddestTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            baddest.classList.add('active-chroma')
        })
    
        tanzanite.addEventListener('click', () => {
            ahriKDAAllOutMaterial.map = ahriKDAAllOutTarzaniteTexture
            ahriKDAAllOutTailsMaterial.map = ahriKDAAllOutTarzaniteTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            tanzanite.classList.add('active-chroma')
        })
        
            aquamarine.addEventListener('click', () => {
                ahriKDAAllOutMaterial.map = ahriKDAAllOutAquamarineTexture
                ahriKDAAllOutTailsMaterial.map = ahriKDAAllOutAquamarineTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                aquamarine.classList.add('active-chroma')
            })
        
            emerald.addEventListener('click', () => {
                ahriKDAAllOutMaterial.map = ahriKDAAllOutEmeraldTexture
                ahriKDAAllOutTailsMaterial.map = ahriKDAAllOutEmeraldTailsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emerald.classList.add('active-chroma')
            })
    })

    // AHRI COVEN
    ahriCoven.addEventListener('click', () => {
        // page set up
        scene.remove(scene.children[1])
            
        // skin selection
        for(let ahriSkin of skins) {ahriSkin.classList.remove('skin-active')}
        ahriCoven.classList.add('skin-active')
        ahriCoven.scrollIntoView({ behavior: 'smooth', })
    
        ahriCheckboxes.style.display = 'none'
    
        // textures
        const ahriCovenTexture = textureLoader.load('models/ahri/textures/ahri-coven/coven.png')
        ahriCovenTexture.flipY = false
        ahriCovenTexture.encoding = THREE.sRGBEncoding
        const ahriCovenTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/tails.png')
        ahriCovenTailsTexture.flipY = false
        ahriCovenTailsTexture.encoding = THREE.sRGBEncoding
    
        const ahriCovenAhriversaryTexture = textureLoader.load('models/ahri/textures/ahri-coven/ahriversary/coven.png')
        ahriCovenAhriversaryTexture.flipY = false
        ahriCovenAhriversaryTexture.encoding = THREE.sRGBEncoding
        const ahriCovenAhriversaryTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/ahriversary/tails.png')
        ahriCovenAhriversaryTailsTexture.flipY = false
        ahriCovenAhriversaryTailsTexture.encoding = THREE.sRGBEncoding
    
        const ahriCovenRubyTexture = textureLoader.load('models/ahri/textures/ahri-coven/ruby/coven.png')
        ahriCovenRubyTexture.flipY = false
        ahriCovenRubyTexture.encoding = THREE.sRGBEncoding
        const ahriCovenRubyTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/ruby/tails.png')
        ahriCovenRubyTailsTexture.flipY = false
        ahriCovenRubyTailsTexture.encoding = THREE.sRGBEncoding
    
        const ahriCovenRoseTexture = textureLoader.load('models/ahri/textures/ahri-coven/rose/coven.png')
        ahriCovenRoseTexture.flipY = false
        ahriCovenRoseTexture.encoding = THREE.sRGBEncoding
        const ahriCovenRoseTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/rose/tails.png')
        ahriCovenRoseTailsTexture.flipY = false
        ahriCovenRoseTailsTexture.encoding = THREE.sRGBEncoding
    
        const ahriCovenPearlTexture = textureLoader.load('models/ahri/textures/ahri-coven/pearl/coven.png')
        ahriCovenPearlTexture.flipY = false
        ahriCovenPearlTexture.encoding = THREE.sRGBEncoding
        const ahriCovenPearlTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/pearl/tails.png')
        ahriCovenPearlTailsTexture.flipY = false
        ahriCovenPearlTailsTexture.encoding = THREE.sRGBEncoding
    
        const ahriCovenTarzaniteTexture = textureLoader.load('models/ahri/textures/ahri-coven/tanzanite/coven.png')
        ahriCovenTarzaniteTexture.flipY = false
        ahriCovenTarzaniteTexture.encoding = THREE.sRGBEncoding
        const ahriCovenTarzaniteTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/tanzanite/tails.png')
        ahriCovenTarzaniteTailsTexture.flipY = false
        ahriCovenTarzaniteTailsTexture.encoding = THREE.sRGBEncoding
    
        const ahriCovenDarkTexture = textureLoader.load('models/ahri/textures/ahri-coven/dark/coven.png')
        ahriCovenDarkTexture.flipY = false
        ahriCovenDarkTexture.encoding = THREE.sRGBEncoding
        const ahriCovenDarkTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/dark/tails.png')
        ahriCovenDarkTailsTexture.flipY = false
        ahriCovenDarkTailsTexture.encoding = THREE.sRGBEncoding
    
        const ahriCovenCatseyeTexture = textureLoader.load('models/ahri/textures/ahri-coven/catseye/coven.png')
        ahriCovenCatseyeTexture.flipY = false
        ahriCovenCatseyeTexture.encoding = THREE.sRGBEncoding
        const ahriCovenCatseyeTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/catseye/tails.png')
        ahriCovenCatseyeTailsTexture.flipY = false
        ahriCovenCatseyeTailsTexture.encoding = THREE.sRGBEncoding
    
        const ahriCovenEmeraldTexture = textureLoader.load('models/ahri/textures/ahri-coven/emerald/coven.png')
        ahriCovenEmeraldTexture.flipY = false
        ahriCovenEmeraldTexture.encoding = THREE.sRGBEncoding
        const ahriCovenEmeraldTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/emerald/tails.png')
        ahriCovenEmeraldTailsTexture.flipY = false
        ahriCovenEmeraldTailsTexture.encoding = THREE.sRGBEncoding
    
        const ahriCovenSapphireTexture = textureLoader.load('models/ahri/textures/ahri-coven/sapphire/coven.png')
        ahriCovenSapphireTexture.flipY = false
        ahriCovenSapphireTexture.encoding = THREE.sRGBEncoding
        const ahriCovenSapphireTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/sapphire/tails.png')
        ahriCovenSapphireTailsTexture.flipY = false
        ahriCovenSapphireTailsTexture.encoding = THREE.sRGBEncoding
    
        const ahriCovenObsidianTexture = textureLoader.load('models/ahri/textures/ahri-coven/obsidian/coven.png')
        ahriCovenObsidianTexture.flipY = false
        ahriCovenObsidianTexture.encoding = THREE.sRGBEncoding
        const ahriCovenObsidianTailsTexture = textureLoader.load('models/ahri/textures/ahri-coven/obsidian/tails.png')
        ahriCovenObsidianTailsTexture.flipY = false
        ahriCovenObsidianTailsTexture.encoding = THREE.sRGBEncoding
    
    
        // materials
        const ahriCovenMaterial = new THREE.MeshBasicMaterial({map: ahriCovenTexture})
        const ahriCovenTailsMaterial = new THREE.MeshBasicMaterial({map: ahriCovenTailsTexture})
    
        // model
        gltfLoader.load(
            'models/ahri/ahri-coven.glb',
            (gltf) => {
                scene.remove(scene.children[1])
                const ahriCovenMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                ahriCovenMesh.material = ahriCovenMaterial
                const ahriCovenTailsMesh = gltf.scene.children[0].children.find(child => child.name === 'tails') 
                ahriCovenTailsMesh.material = ahriCovenTailsMaterial
    
                gltf.scene.scale.set(0.019, 0.019, 0.019)
                gltf.scene.position.set(0, -1.2, 0)
                scene.add(gltf.scene)
            }
        )
        
        // chromas
        ahriChromas.style.display = 'block'
        ahriChromas.appendChild(ruby)
        ahriChromas.appendChild(dark)
        ahriChromas.appendChild(rose)
        ahriChromas.appendChild(catseye)
        ahriChromas.appendChild(pearl)
        ahriChromas.appendChild(tanzanite)
        ahriChromas.appendChild(obsidian)
        ahriChromas.appendChild(sapphire)
        ahriChromas.appendChild(emerald)
    
        golden.remove()
        night.remove()
        citrine.remove()
        golden.remove()
        peridot.remove()
        night.remove()
        amethyst.remove()
        baddest.remove()
        aquamarine.remove()
    
        
        // recall chromas
        activeChromas = document.querySelectorAll('.chroma')
    
        for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
        noChromaAhri.classList.add('active-chroma')
    
        noChromaAhri.addEventListener('click', () => {
            ahriCovenMaterial.map = ahriCovenTexture
            ahriCovenTailsMaterial.map = ahriCovenTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAhri.classList.add('active-chroma')
        })
    
        ahriversary.addEventListener('click', () => {
            ahriCovenMaterial.map = ahriCovenAhriversaryTexture
            ahriCovenTailsMaterial.map = ahriCovenAhriversaryTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            ahriversary.classList.add('active-chroma')
        })
    
        ruby.addEventListener('click', () => {
            ahriCovenMaterial.map = ahriCovenRubyTexture
            ahriCovenTailsMaterial.map = ahriCovenRubyTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            ruby.classList.add('active-chroma')
        })
    
        dark.addEventListener('click', () => {
            ahriCovenMaterial.map = ahriCovenDarkTexture
            ahriCovenTailsMaterial.map = ahriCovenDarkTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            dark.classList.add('active-chroma')
        })
    
        rose.addEventListener('click', () => {
            ahriCovenMaterial.map = ahriCovenRoseTexture
            ahriCovenTailsMaterial.map = ahriCovenRoseTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            rose.classList.add('active-chroma')
        })
    
        catseye.addEventListener('click', () => {
            ahriCovenMaterial.map = ahriCovenCatseyeTexture
            ahriCovenTailsMaterial.map = ahriCovenCatseyeTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            catseye.classList.add('active-chroma')
        })
    
        pearl.addEventListener('click', () => {
            ahriCovenMaterial.map = ahriCovenPearlTexture
            ahriCovenTailsMaterial.map = ahriCovenPearlTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            pearl.classList.add('active-chroma')
        })
    
    tanzanite.addEventListener('click', () => {
        ahriCovenMaterial.map = ahriCovenTarzaniteTexture
        ahriCovenTailsMaterial.map = ahriCovenTarzaniteTailsTexture
        for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
        tanzanite.classList.add('active-chroma')
    })
    
        obsidian.addEventListener('click', () => {
            ahriCovenMaterial.map = ahriCovenObsidianTexture
            ahriCovenTailsMaterial.map = ahriCovenObsidianTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            obsidian.classList.add('active-chroma')
        })
    
        sapphire.addEventListener('click', () => {
            ahriCovenMaterial.map = ahriCovenSapphireTexture
            ahriCovenTailsMaterial.map = ahriCovenSapphireTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            sapphire.classList.add('active-chroma')
        })
    
        emerald.addEventListener('click', () => {
            ahriCovenMaterial.map = ahriCovenEmeraldTexture
            ahriCovenTailsMaterial.map = ahriCovenEmeraldTailsTexture
            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            emerald.classList.add('active-chroma')
        })
    })

    })
    })

    // AKALI
    akaliSelectors.forEach(akaliSelector => {akaliSelector.addEventListener('click', () => {
        scene.remove(scene.children[1])
        canvas.style.pointerEvents = "all"
        ahriPage.style.opacity = '0'
        ahriPage.style.pointerEvents = 'none'
        evelynnPage.style.opacity = '0'
        evelynnPage.style.pointerEvents = 'none'
        kaisaPage.style.opacity = '0'
        kaisaPage.style.pointerEvents = 'none'
        seraphinePage.style.opacity = '0'
        seraphinePage.style.pointerEvents = 'none'

        // page setup
        akaliPage.style.opacity = '1'
        akaliPage.style.pointerEvents = 'all'
        root.style.setProperty('--primary', "#8C7735")
        root.style.setProperty('--secondary', "#BF8578")
        root.style.setProperty('--background', "#260A0F")
        akaliChromas.style.display = 'none'

        // skin selection
        for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
        akaliBase.classList.add('skin-active')
        akaliBase.scrollIntoView({ behavior: 'smooth', })

        // checkbox
        akaliCheckboxes.style.display = 'block'
        akaliCheckboxes.appendChild(akaliMaskSwitch)
        akaliCheckboxes.appendChild(akaliMaskLabel)
        akaliMaskLabel.innerHTML = 'Mask'
        akaliMaskSwitch.checked = true

        // load model
        gltfLoader.load(
            'models/akali/akali-base.glb',
            (gltf) => {
                scene.remove(scene.children[1])
                gltf.scene.scale.set(0.017, 0.017, 0.017)
                gltf.scene.position.set(0, -1.7, 0)

                const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                akaliMaskSwitch.addEventListener('click', () => {
                    if(akaliMaskSwitch.checked) {
                        akaliMaskMesh.visible = true
                    } else {
                        akaliMaskMesh.visible = false
                    }                  
                })

                scene.add(gltf.scene)
            }
        )

        // AKALI BASE
        akaliBase.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliBase.classList.add('skin-active')
            akaliBase.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Mask'
            akaliMaskSwitch.checked = true

            // load model
            gltfLoader.load(
                'models/akali/akali-base.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)

                    const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliMaskMesh.visible = true
                        } else {
                            akaliMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'none'
        })

        // AKALI STINGER
        akaliStinger.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliStinger.classList.add('skin-active')
            akaliStinger.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Mask'
            akaliMaskSwitch.checked = true


            // load model
            gltfLoader.load(
                'models/akali/akali-stinger.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)

                    const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliMaskMesh.visible = true
                        } else {
                            akaliMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'none'
        })

        // AKALI INFERNAL
        akaliInfernal.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliInfernal.classList.add('skin-active')
            akaliInfernal.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'none'

            // load model
            gltfLoader.load(
                'models/akali/akali-infernal.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'none'
        })

        // AKALI ALL STAR
        akaliAllStar.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliAllStar.classList.add('skin-active')
            akaliAllStar.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'none'

            // load model
            gltfLoader.load(
                'models/akali/akali-all-star.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'none'
        })

        // AKALI NURSE
        akaliNurse.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliNurse.classList.add('skin-active')
            akaliNurse.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Mask'
            akaliMaskSwitch.checked = true

            // textures
            const akaliNurseTexture = textureLoader.load('models/akali/textures/nurse/akali.png')
            akaliNurseTexture.flipY = false
            akaliNurseTexture.encoding = THREE.sRGBEncoding

            const akaliNurseAmethystTexture = textureLoader.load('models/akali/textures/nurse/amethyst/akali.png')
            akaliNurseAmethystTexture.flipY = false
            akaliNurseAmethystTexture.encoding = THREE.sRGBEncoding

            const akaliNurseCitrineTexture = textureLoader.load('models/akali/textures/nurse/citrine/akali.png')
            akaliNurseCitrineTexture.flipY = false
            akaliNurseCitrineTexture.encoding = THREE.sRGBEncoding

            const akaliNurseEmeraldTexture = textureLoader.load('models/akali/textures/nurse/emerald/akali.png')
            akaliNurseEmeraldTexture.flipY = false
            akaliNurseEmeraldTexture.encoding = THREE.sRGBEncoding

            const akaliNurseObsidianTexture = textureLoader.load('models/akali/textures/nurse/obsidian/akali.png')
            akaliNurseObsidianTexture.flipY = false
            akaliNurseObsidianTexture.encoding = THREE.sRGBEncoding

            const akaliNurseRainbowTexture = textureLoader.load('models/akali/textures/nurse/rainbow/akali.png')
            akaliNurseRainbowTexture.flipY = false
            akaliNurseRainbowTexture.encoding = THREE.sRGBEncoding

            const akaliNurseRoseTexture = textureLoader.load('models/akali/textures/nurse/rose/akali.png')
            akaliNurseRoseTexture.flipY = false
            akaliNurseRoseTexture.encoding = THREE.sRGBEncoding

            const akaliNurseRubyTexture = textureLoader.load('models/akali/textures/nurse/ruby/akali.png')
            akaliNurseRubyTexture.flipY = false
            akaliNurseRubyTexture.encoding = THREE.sRGBEncoding

            const akaliNurseTanzaniteTexture = textureLoader.load('models/akali/textures/nurse/tanzanite/akali.png')
            akaliNurseTanzaniteTexture.flipY = false
            akaliNurseTanzaniteTexture.encoding = THREE.sRGBEncoding

            // materials
            const akaliNurseMaterial = new THREE.MeshBasicMaterial({map: akaliNurseTexture})


            // load model
            gltfLoader.load(
                'models/akali/akali-nurse.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)
                    const akaliNurseMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    akaliNurseMesh.material = akaliNurseMaterial
                    const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 
                    akaliMaskMesh.material = akaliNurseMaterial

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliMaskMesh.visible = true
                        } else {
                            akaliMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'block'
            akaliChromas.appendChild(ruby)
            akaliChromas.appendChild(citrine)
            akaliChromas.appendChild(rose)
            akaliChromas.appendChild(amethyst)
            akaliChromas.appendChild(tanzanite)
            akaliChromas.appendChild(obsidian)
            akaliChromas.appendChild(emerald)
            akaliChromas.appendChild(rainbow)

            // remove chromas
            pearl.remove()
            catseye.remove()
            reckoning.remove()
            sapphire.remove()
            turquoise.remove()
            freestyle.remove()
            peridot.remove()
            baddest.remove()
            underground.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAkali.classList.add('active-chroma')

            noChromaAkali.addEventListener('click', () => {
                akaliNurseMaterial.map = akaliNurseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAkali.classList.add('active-chroma')
            })

            amethyst.addEventListener('click', () => {
                akaliNurseMaterial.map = akaliNurseAmethystTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                amethyst.classList.add('active-chroma')
            })

            citrine.addEventListener('click', () => {
                akaliNurseMaterial.map = akaliNurseCitrineTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                citrine.classList.add('active-chroma')
            })

            emerald.addEventListener('click', () => {
                akaliNurseMaterial.map = akaliNurseEmeraldTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emerald.classList.add('active-chroma')
            })

            obsidian.addEventListener('click', () => {
                akaliNurseMaterial.map = akaliNurseObsidianTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })

            rainbow.addEventListener('click', () => {
                akaliNurseMaterial.map = akaliNurseRainbowTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rainbow.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                akaliNurseMaterial.map = akaliNurseRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                akaliNurseMaterial.map = akaliNurseRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })
            tanzanite.addEventListener('click', () => {
                akaliNurseMaterial.map = akaliNurseTanzaniteTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                tanzanite.classList.add('active-chroma')
            })
        })

        // AKALI BLOOD MOOD
        akaliBloodMoon.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliBloodMoon.classList.add('skin-active')
            akaliBloodMoon.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'none'

            // load model
            gltfLoader.load(
                'models/akali/akali-blood-moon.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'none'
        })

        // AKALI SILVERFANG
        akaliSilverfang.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliSilverfang.classList.add('skin-active')
            akaliSilverfang.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Mask'
            akaliMaskSwitch.checked = true


            // load model
            gltfLoader.load(
                'models/akali/akali-silverfang.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)

                    const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliMaskMesh.visible = true
                        } else {
                            akaliMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'none'
        })

        // AKALI HEADHUNDER
        akaliHeadhunter.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliHeadhunter.classList.add('skin-active')
            akaliHeadhunter.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Mask'
            akaliMaskSwitch.checked = true

            // textures
            const akaliHeadhunterTexture = textureLoader.load('models/akali/textures/headhunter/akali.png')
            akaliHeadhunterTexture.flipY = false
            akaliHeadhunterTexture.encoding = THREE.sRGBEncoding

            const akaliHeadhunterPearlTexture = textureLoader.load('models/akali/textures/headhunter/pearl/akali.png')
            akaliHeadhunterPearlTexture.flipY = false
            akaliHeadhunterPearlTexture.encoding = THREE.sRGBEncoding

            const akaliHeadhunterRubyTexture = textureLoader.load('models/akali/textures/headhunter/ruby/akali.png')
            akaliHeadhunterRubyTexture.flipY = false
            akaliHeadhunterRubyTexture.encoding = THREE.sRGBEncoding

            const akaliHeadhunterTanzaniteTexture = textureLoader.load('models/akali/textures/headhunter/tanzanite/akali.png')
            akaliHeadhunterTanzaniteTexture.flipY = false
            akaliHeadhunterTanzaniteTexture.encoding = THREE.sRGBEncoding

            // materials
            const akaliHeadhunterMaterial = new THREE.MeshBasicMaterial({map: akaliHeadhunterTexture})


            // load model
            gltfLoader.load(
                'models/akali/akali-headhunter.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)
                    const akaliHeadhunterMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    akaliHeadhunterMesh.material = akaliHeadhunterMaterial
                    const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 
                    akaliMaskMesh.material = akaliHeadhunterMaterial

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliMaskMesh.visible = true
                        } else {
                            akaliMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'block'
            akaliChromas.appendChild(ruby)
            akaliChromas.appendChild(pearl)
            akaliChromas.appendChild(tanzanite)

            // remove chromas
            citrine.remove()
            rose.remove()
            amethyst.remove()
            obsidian.remove()
            emerald.remove()
            rainbow.remove()
            catseye.remove()
            reckoning.remove()
            sapphire.remove()
            turquoise.remove()
            freestyle.remove()
            peridot.remove()
            baddest.remove()
            underground.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAkali.classList.add('active-chroma')

            noChromaAkali.addEventListener('click', () => {
                akaliHeadhunterMaterial.map = akaliHeadhunterTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAkali.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                akaliHeadhunterMaterial.map = akaliHeadhunterRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })
            tanzanite.addEventListener('click', () => {
                akaliHeadhunterMaterial.map = akaliHeadhunterTanzaniteTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                tanzanite.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                akaliHeadhunterMaterial.map = akaliHeadhunterPearlTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })
        })

        // AKALI SASHIMI
        akaliSashimi.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliSashimi.classList.add('skin-active')
            akaliSashimi.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'none'

            // load model
            gltfLoader.load(
                'models/akali/akali-sashimi.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'none'
        })

        // AKALI KDA
        akaliKDA.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliKDA.classList.add('skin-active')
            akaliKDA.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Mask'
            akaliMaskSwitch.checked = true


            // load model
            gltfLoader.load(
                'models/akali/akali-kda.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)

                    const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliMaskMesh.visible = true
                        } else {
                            akaliMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'none'
        })

        // AKALI KDA PRESTIGE
        akaliKDAPrestige.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliKDAPrestige.classList.add('skin-active')
            akaliKDAPrestige.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Mask'
            akaliMaskSwitch.checked = true


            // load model
            gltfLoader.load(
                'models/akali/akali-kda-prestige.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)

                    const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliMaskMesh.visible = true
                        } else {
                            akaliMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'none'
        })

        // AKALI PROJECT
        akaliProject.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliProject.classList.add('skin-active')
            akaliProject.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Mask'
            akaliMaskSwitch.checked = true

            // textures
            const akaliProjectTexture = textureLoader.load('models/akali/textures/project/akali.png')
            akaliProjectTexture.flipY = false
            akaliProjectTexture.encoding = THREE.sRGBEncoding
            const akaliProjectMaskTexture = textureLoader.load('models/akali/textures/project/mask.png')
            akaliProjectMaskTexture.flipY = false
            akaliProjectMaskTexture.encoding = THREE.sRGBEncoding
            const akaliProjectDragonTexture = textureLoader.load('models/akali/textures/project/dragon.png')
            akaliProjectDragonTexture.flipY = false
            akaliProjectDragonTexture.encoding = THREE.sRGBEncoding

            const akaliProjectPearlTexture = textureLoader.load('models/akali/textures/project/pearl/akali.png')
            akaliProjectPearlTexture.flipY = false
            akaliProjectPearlTexture.encoding = THREE.sRGBEncoding
            const akaliProjectMaskPearlTexture = textureLoader.load('models/akali/textures/project/pearl/mask.png')
            akaliProjectMaskPearlTexture.flipY = false
            akaliProjectMaskPearlTexture.encoding = THREE.sRGBEncoding
            const akaliProjectDragonPearlTexture = textureLoader.load('models/akali/textures/project/pearl/dragon.png')
            akaliProjectDragonPearlTexture.flipY = false
            akaliProjectDragonPearlTexture.encoding = THREE.sRGBEncoding

            const akaliProjectRubyTexture = textureLoader.load('models/akali/textures/project/ruby/akali.png')
            akaliProjectRubyTexture.flipY = false
            akaliProjectRubyTexture.encoding = THREE.sRGBEncoding
            const akaliProjectMaskRubyTexture = textureLoader.load('models/akali/textures/project/ruby/mask.png')
            akaliProjectMaskRubyTexture.flipY = false
            akaliProjectMaskRubyTexture.encoding = THREE.sRGBEncoding
            const akaliProjectDragonRubyTexture = textureLoader.load('models/akali/textures/project/ruby/dragon.png')
            akaliProjectDragonRubyTexture.flipY = false
            akaliProjectDragonRubyTexture.encoding = THREE.sRGBEncoding

            const akaliProjectAmethystTexture = textureLoader.load('models/akali/textures/project/amethyst/akali.png')
            akaliProjectAmethystTexture.flipY = false
            akaliProjectAmethystTexture.encoding = THREE.sRGBEncoding
            const akaliProjectMaskAmethystTexture = textureLoader.load('models/akali/textures/project/amethyst/mask.png')
            akaliProjectMaskAmethystTexture.flipY = false
            akaliProjectMaskAmethystTexture.encoding = THREE.sRGBEncoding
            const akaliProjectDragonAmethystTexture = textureLoader.load('models/akali/textures/project/amethyst/dragon.png')
            akaliProjectDragonAmethystTexture.flipY = false
            akaliProjectDragonAmethystTexture.encoding = THREE.sRGBEncoding

            const akaliProjectCatseyeTexture = textureLoader.load('models/akali/textures/project/catseye/akali.png')
            akaliProjectCatseyeTexture.flipY = false
            akaliProjectCatseyeTexture.encoding = THREE.sRGBEncoding
            const akaliProjectMaskCatseyeTexture = textureLoader.load('models/akali/textures/project/catseye/mask.png')
            akaliProjectMaskCatseyeTexture.flipY = false
            akaliProjectMaskCatseyeTexture.encoding = THREE.sRGBEncoding
            const akaliProjectDragonCatseyeTexture = textureLoader.load('models/akali/textures/project/catseye/dragon.png')
            akaliProjectDragonCatseyeTexture.flipY = false
            akaliProjectDragonCatseyeTexture.encoding = THREE.sRGBEncoding

            const akaliProjectObsidianTexture = textureLoader.load('models/akali/textures/project/obsidian/akali.png')
            akaliProjectObsidianTexture.flipY = false
            akaliProjectObsidianTexture.encoding = THREE.sRGBEncoding
            const akaliProjectMaskObsidianTexture = textureLoader.load('models/akali/textures/project/obsidian/mask.png')
            akaliProjectMaskObsidianTexture.flipY = false
            akaliProjectMaskObsidianTexture.encoding = THREE.sRGBEncoding
            const akaliProjectDragonObsidianTexture = textureLoader.load('models/akali/textures/project/obsidian/dragon.png')
            akaliProjectDragonObsidianTexture.flipY = false
            akaliProjectDragonObsidianTexture.encoding = THREE.sRGBEncoding

            const akaliProjectReckoningTexture = textureLoader.load('models/akali/textures/project/reckoning/akali.png')
            akaliProjectReckoningTexture.flipY = false
            akaliProjectReckoningTexture.encoding = THREE.sRGBEncoding
            const akaliProjectMaskReckoningTexture = textureLoader.load('models/akali/textures/project/reckoning/mask.png')
            akaliProjectMaskReckoningTexture.flipY = false
            akaliProjectMaskReckoningTexture.encoding = THREE.sRGBEncoding
            const akaliProjectDragonReckoningTexture = textureLoader.load('models/akali/textures/project/reckoning/dragon.png')
            akaliProjectDragonReckoningTexture.flipY = false
            akaliProjectDragonReckoningTexture.encoding = THREE.sRGBEncoding

            const akaliProjectRoseTexture = textureLoader.load('models/akali/textures/project/rose/akali.png')
            akaliProjectRoseTexture.flipY = false
            akaliProjectRoseTexture.encoding = THREE.sRGBEncoding
            const akaliProjectMaskRoseTexture = textureLoader.load('models/akali/textures/project/rose/mask.png')
            akaliProjectMaskRoseTexture.flipY = false
            akaliProjectMaskRoseTexture.encoding = THREE.sRGBEncoding
            const akaliProjectDragonRoseTexture = textureLoader.load('models/akali/textures/project/rose/dragon.png')
            akaliProjectDragonRoseTexture.flipY = false
            akaliProjectDragonRoseTexture.encoding = THREE.sRGBEncoding

            const akaliProjectSapphireTexture = textureLoader.load('models/akali/textures/project/sapphire/akali.png')
            akaliProjectSapphireTexture.flipY = false
            akaliProjectSapphireTexture.encoding = THREE.sRGBEncoding
            const akaliProjectMaskSapphireTexture = textureLoader.load('models/akali/textures/project/sapphire/mask.png')
            akaliProjectMaskSapphireTexture.flipY = false
            akaliProjectMaskSapphireTexture.encoding = THREE.sRGBEncoding
            const akaliProjectDragonSapphireTexture = textureLoader.load('models/akali/textures/project/sapphire/dragon.png')
            akaliProjectDragonSapphireTexture.flipY = false
            akaliProjectDragonSapphireTexture.encoding = THREE.sRGBEncoding

            const akaliProjectTurquoiseTexture = textureLoader.load('models/akali/textures/project/turquoise/akali.png')
            akaliProjectTurquoiseTexture.flipY = false
            akaliProjectTurquoiseTexture.encoding = THREE.sRGBEncoding
            const akaliProjectMaskTurquoiseTexture = textureLoader.load('models/akali/textures/project/turquoise/mask.png')
            akaliProjectMaskTurquoiseTexture.flipY = false
            akaliProjectMaskTurquoiseTexture.encoding = THREE.sRGBEncoding
            const akaliProjectDragonTurquoiseTexture = textureLoader.load('models/akali/textures/project/turquoise/dragon.png')
            akaliProjectDragonTurquoiseTexture.flipY = false
            akaliProjectDragonTurquoiseTexture.encoding = THREE.sRGBEncoding


            // materials
            const akaliProjectMaterial = new THREE.MeshBasicMaterial({map: akaliProjectTexture})
            const akaliProjectMaskMaterial = new THREE.MeshBasicMaterial({map: akaliProjectMaskTexture})
            const akaliProjectDragonMaterial = new THREE.MeshBasicMaterial({map: akaliProjectDragonTexture})


            // load model
            gltfLoader.load(
                'models/akali/akali-project.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)
                    const akaliProjectMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    akaliProjectMesh.material = akaliProjectMaterial
                    const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'helmet') 
                    akaliMaskMesh.material = akaliProjectMaskMaterial
                    const akaliProjectDragonMesh = gltf.scene.children[0].children.find(child => child.name === 'dragon') 
                    akaliProjectDragonMesh.material = akaliProjectDragonMaterial

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliMaskMesh.visible = true
                        } else {
                            akaliMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'block'
            akaliChromas.appendChild(ruby)
            akaliChromas.appendChild(catseye)
            akaliChromas.appendChild(reckoning)
            akaliChromas.appendChild(rose)
            akaliChromas.appendChild(amethyst)
            akaliChromas.appendChild(pearl)
            akaliChromas.appendChild(obsidian)
            akaliChromas.appendChild(sapphire)
            akaliChromas.appendChild(turquoise)

            // remove chromas
            citrine.remove()
            emerald.remove()
            rainbow.remove()
            tanzanite.remove()
            freestyle.remove()
            peridot.remove()
            baddest.remove()
            underground.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAkali.classList.add('active-chroma')

            noChromaAkali.addEventListener('click', () => {
                akaliProjectMaterial.map = akaliProjectTexture
                akaliProjectMaskMaterial.map = akaliProjectMaskTexture
                akaliProjectDragonMaterial.map = akaliProjectDragonTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAkali.classList.add('active-chroma')
            })

            amethyst.addEventListener('click', () => {
                akaliProjectMaterial.map = akaliProjectAmethystTexture
                akaliProjectMaskMaterial.map = akaliProjectMaskAmethystTexture
                akaliProjectDragonMaterial.map = akaliProjectDragonAmethystTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                amethyst.classList.add('active-chroma')
            })

            catseye.addEventListener('click', () => {
                akaliProjectMaterial.map = akaliProjectCatseyeTexture
                akaliProjectMaskMaterial.map = akaliProjectMaskCatseyeTexture
                akaliProjectDragonMaterial.map = akaliProjectDragonCatseyeTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                catseye.classList.add('active-chroma')
            })

            obsidian.addEventListener('click', () => {
                akaliProjectMaterial.map = akaliProjectObsidianTexture
                akaliProjectMaskMaterial.map = akaliProjectMaskObsidianTexture
                akaliProjectDragonMaterial.map = akaliProjectDragonObsidianTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                akaliProjectMaterial.map = akaliProjectPearlTexture
                akaliProjectMaskMaterial.map = akaliProjectMaskPearlTexture
                akaliProjectDragonMaterial.map = akaliProjectDragonPearlTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })

            reckoning.addEventListener('click', () => {
                akaliProjectMaterial.map = akaliProjectReckoningTexture
                akaliProjectMaskMaterial.map = akaliProjectMaskReckoningTexture
                akaliProjectDragonMaterial.map = akaliProjectDragonReckoningTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                reckoning.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                akaliProjectMaterial.map = akaliProjectRoseTexture
                akaliProjectMaskMaterial.map = akaliProjectMaskRoseTexture
                akaliProjectDragonMaterial.map = akaliProjectDragonRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                akaliProjectMaterial.map = akaliProjectRubyTexture
                akaliProjectMaskMaterial.map = akaliProjectMaskRubyTexture
                akaliProjectDragonMaterial.map = akaliProjectDragonRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })

            sapphire.addEventListener('click', () => {
                akaliProjectMaterial.map = akaliProjectSapphireTexture
                akaliProjectMaskMaterial.map = akaliProjectMaskSapphireTexture
                akaliProjectDragonMaterial.map = akaliProjectDragonSapphireTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                sapphire.classList.add('active-chroma')
            })

            turquoise.addEventListener('click', () => {
                akaliProjectMaterial.map = akaliProjectTurquoiseTexture
                akaliProjectMaskMaterial.map = akaliProjectMaskTurquoiseTexture
                akaliProjectDragonMaterial.map = akaliProjectDragonTurquoiseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                turquoise.classList.add('active-chroma')
            })
        })

        // AKALI TRUE DAMAGE
        akaliTrueDamage.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliTrueDamage.classList.add('skin-active')
            akaliTrueDamage.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Mask'
            akaliMaskSwitch.checked = true

            // textures
            const akaliTrueDamageTexture = textureLoader.load('models/akali/textures/true-damage/akali.png')
            akaliTrueDamageTexture.flipY = false
            akaliTrueDamageTexture.encoding = THREE.sRGBEncoding

            const akaliTrueDamagePearlTexture = textureLoader.load('models/akali/textures/true-damage/pearl/akali.png')
            akaliTrueDamagePearlTexture.flipY = false
            akaliTrueDamagePearlTexture.encoding = THREE.sRGBEncoding

            const akaliTrueDamageRubyTexture = textureLoader.load('models/akali/textures/true-damage/ruby/akali.png')
            akaliTrueDamageRubyTexture.flipY = false
            akaliTrueDamageRubyTexture.encoding = THREE.sRGBEncoding

            const akaliTrueDamageCatseyeTexture = textureLoader.load('models/akali/textures/true-damage/catseye/akali.png')
            akaliTrueDamageCatseyeTexture.flipY = false
            akaliTrueDamageCatseyeTexture.encoding = THREE.sRGBEncoding

            const akaliTrueDamageEmeraldTexture = textureLoader.load('models/akali/textures/true-damage/emerald/akali.png')
            akaliTrueDamageEmeraldTexture.flipY = false
            akaliTrueDamageEmeraldTexture.encoding = THREE.sRGBEncoding

            const akaliTrueDamageFreestyleTexture = textureLoader.load('models/akali/textures/true-damage/freestyle/akali.png')
            akaliTrueDamageFreestyleTexture.flipY = false
            akaliTrueDamageFreestyleTexture.encoding = THREE.sRGBEncoding

            const akaliTrueDamageRoseTexture = textureLoader.load('models/akali/textures/true-damage/rose/akali.png')
            akaliTrueDamageRoseTexture.flipY = false
            akaliTrueDamageRoseTexture.encoding = THREE.sRGBEncoding

            const akaliTrueDamageSapphireTexture = textureLoader.load('models/akali/textures/true-damage/sapphire/akali.png')
            akaliTrueDamageSapphireTexture.flipY = false
            akaliTrueDamageSapphireTexture.encoding = THREE.sRGBEncoding

            // materials
            const akaliTrueDamageMaterial = new THREE.MeshBasicMaterial({map: akaliTrueDamageTexture})


            // load model
            gltfLoader.load(
                'models/akali/akali-true-damage.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)
                    const akaliTrueDamageMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    akaliTrueDamageMesh.material = akaliTrueDamageMaterial
                    const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 
                    akaliMaskMesh.material = akaliTrueDamageMaterial

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliMaskMesh.visible = true
                        } else {
                            akaliMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'block'
            akaliChromas.appendChild(ruby)
            akaliChromas.appendChild(catseye)
            akaliChromas.appendChild(freestyle)
            akaliChromas.appendChild(rose)
            akaliChromas.appendChild(pearl)
            akaliChromas.appendChild(sapphire)
            akaliChromas.appendChild(emerald)

            // remove chromas
            citrine.remove()
            amethyst.remove()
            obsidian.remove()
            rainbow.remove()
            reckoning.remove()
            turquoise.remove()
            tanzanite.remove()
            peridot.remove()
            baddest.remove()
            underground.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAkali.classList.add('active-chroma')

            noChromaAkali.addEventListener('click', () => {
                akaliTrueDamageMaterial.map = akaliTrueDamageTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAkali.classList.add('active-chroma')
            })

            catseye.addEventListener('click', () => {
                akaliTrueDamageMaterial.map = akaliTrueDamageCatseyeTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                catseye.classList.add('active-chroma')
            })

            emerald.addEventListener('click', () => {
                akaliTrueDamageMaterial.map = akaliTrueDamageEmeraldTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emerald.classList.add('active-chroma')
            })

            freestyle.addEventListener('click', () => {
                akaliTrueDamageMaterial.map = akaliTrueDamageFreestyleTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                freestyle.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                akaliTrueDamageMaterial.map = akaliTrueDamageRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                akaliTrueDamageMaterial.map = akaliTrueDamageRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                akaliTrueDamageMaterial.map = akaliTrueDamagePearlTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })

            sapphire.addEventListener('click', () => {
                akaliTrueDamageMaterial.map = akaliTrueDamageSapphireTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                sapphire.classList.add('active-chroma')
            })
        })

        // AKALI KDA ALL OUT
        akaliKDAAllOut.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliKDAAllOut.classList.add('skin-active')
            akaliKDAAllOut.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Mask'
            akaliMaskSwitch.checked = true

            // textures
            const akaliKDAAllOutTexture = textureLoader.load('models/akali/textures/kda-all-out/akali.png')
            akaliKDAAllOutTexture.flipY = false
            akaliKDAAllOutTexture.encoding = THREE.sRGBEncoding
            const akaliKDAAllOutMaskTexture = textureLoader.load('models/akali/textures/kda-all-out/mask.png')
            akaliKDAAllOutMaskTexture.flipY = false
            akaliKDAAllOutMaskTexture.encoding = THREE.sRGBEncoding

            const akaliKDAAllOutPearlTexture = textureLoader.load('models/akali/textures/kda-all-out/pearl/akali.png')
            akaliKDAAllOutPearlTexture.flipY = false
            akaliKDAAllOutPearlTexture.encoding = THREE.sRGBEncoding
            const akaliKDAAllOutMaskPearlTexture = textureLoader.load('models/akali/textures/kda-all-out/pearl/mask.png')
            akaliKDAAllOutMaskPearlTexture.flipY = false
            akaliKDAAllOutMaskPearlTexture.encoding = THREE.sRGBEncoding

            const akaliKDAAllOutRubyTexture = textureLoader.load('models/akali/textures/kda-all-out/ruby/akali.png')
            akaliKDAAllOutRubyTexture.flipY = false
            akaliKDAAllOutRubyTexture.encoding = THREE.sRGBEncoding
            const akaliKDAAllOutMaskRubyTexture = textureLoader.load('models/akali/textures/kda-all-out/ruby/mask.png')
            akaliKDAAllOutMaskRubyTexture.flipY = false
            akaliKDAAllOutMaskRubyTexture.encoding = THREE.sRGBEncoding

            const akaliKDAAllOutCatseyeTexture = textureLoader.load('models/akali/textures/kda-all-out/catseye/akali.png')
            akaliKDAAllOutCatseyeTexture.flipY = false
            akaliKDAAllOutCatseyeTexture.encoding = THREE.sRGBEncoding
            const akaliKDAAllOutMaskCatseyeTexture = textureLoader.load('models/akali/textures/kda-all-out/catseye/mask.png')
            akaliKDAAllOutMaskCatseyeTexture.flipY = false
            akaliKDAAllOutMaskCatseyeTexture.encoding = THREE.sRGBEncoding

            const akaliKDAAllOutRoseTexture = textureLoader.load('models/akali/textures/kda-all-out/rose/akali.png')
            akaliKDAAllOutRoseTexture.flipY = false
            akaliKDAAllOutRoseTexture.encoding = THREE.sRGBEncoding
            const akaliKDAAllOutMaskRoseTexture = textureLoader.load('models/akali/textures/kda-all-out/rose/mask.png')
            akaliKDAAllOutMaskRoseTexture.flipY = false
            akaliKDAAllOutMaskRoseTexture.encoding = THREE.sRGBEncoding

            const akaliKDAAllOutSapphireTexture = textureLoader.load('models/akali/textures/kda-all-out/sapphire/akali.png')
            akaliKDAAllOutSapphireTexture.flipY = false
            akaliKDAAllOutSapphireTexture.encoding = THREE.sRGBEncoding
            const akaliKDAAllOutMaskSapphireTexture = textureLoader.load('models/akali/textures/kda-all-out/sapphire/mask.png')
            akaliKDAAllOutMaskSapphireTexture.flipY = false
            akaliKDAAllOutMaskSapphireTexture.encoding = THREE.sRGBEncoding

            const akaliKDAAllOutTanzaniteTexture = textureLoader.load('models/akali/textures/kda-all-out/tanzanite/akali.png')
            akaliKDAAllOutTanzaniteTexture.flipY = false
            akaliKDAAllOutTanzaniteTexture.encoding = THREE.sRGBEncoding
            const akaliKDAAllOutMaskTanzaniteTexture = textureLoader.load('models/akali/textures/kda-all-out/tanzanite/mask.png')
            akaliKDAAllOutMaskTanzaniteTexture.flipY = false
            akaliKDAAllOutMaskTanzaniteTexture.encoding = THREE.sRGBEncoding

            const akaliKDAAllOutBaddestTexture = textureLoader.load('models/akali/textures/kda-all-out/baddest/akali.png')
            akaliKDAAllOutBaddestTexture.flipY = false
            akaliKDAAllOutBaddestTexture.encoding = THREE.sRGBEncoding
            const akaliKDAAllOutMaskBaddestTexture = textureLoader.load('models/akali/textures/kda-all-out/baddest/mask.png')
            akaliKDAAllOutMaskBaddestTexture.flipY = false
            akaliKDAAllOutMaskBaddestTexture.encoding = THREE.sRGBEncoding

            const akaliKDAAllOutPeridotTexture = textureLoader.load('models/akali/textures/kda-all-out/peridot/akali.png')
            akaliKDAAllOutPeridotTexture.flipY = false
            akaliKDAAllOutPeridotTexture.encoding = THREE.sRGBEncoding
            const akaliKDAAllOutMaskPeridotTexture = textureLoader.load('models/akali/textures/kda-all-out/peridot/mask.png')
            akaliKDAAllOutMaskPeridotTexture.flipY = false
            akaliKDAAllOutMaskPeridotTexture.encoding = THREE.sRGBEncoding


            // materials
            const akaliKDAAllOutMaterial = new THREE.MeshBasicMaterial({map: akaliKDAAllOutTexture})
            const akaliKDAAllOutMaskMaterial = new THREE.MeshBasicMaterial({map: akaliKDAAllOutMaskTexture})


            // load model
            gltfLoader.load(
                'models/akali/akali-kda-all-out.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)
                    const akaliKDAAllOutMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    akaliKDAAllOutMesh.material = akaliKDAAllOutMaterial

                    const akaliMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 
                    akaliMaskMesh.material = akaliKDAAllOutMaskMaterial

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliMaskMesh.visible = true
                        } else {
                            akaliMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'block'
            akaliChromas.appendChild(ruby)
            akaliChromas.appendChild(catseye)
            akaliChromas.appendChild(rose)
            akaliChromas.appendChild(pearl)
            akaliChromas.appendChild(baddest)
            akaliChromas.appendChild(tanzanite)
            akaliChromas.appendChild(sapphire)
            akaliChromas.appendChild(peridot)

            // remove chromas
            citrine.remove()
            amethyst.remove()
            obsidian.remove()
            emerald.remove()
            rainbow.remove()
            freestyle.remove()
            turquoise.remove()
            reckoning.remove()
            underground.remove()


            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAkali.classList.add('active-chroma')

            noChromaAkali.addEventListener('click', () => {
                akaliKDAAllOutMaterial.map = akaliKDAAllOutTexture
                akaliKDAAllOutMaskMaterial.map = akaliKDAAllOutMaskTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAkali.classList.add('active-chroma')
            })

            catseye.addEventListener('click', () => {
                akaliKDAAllOutMaterial.map = akaliKDAAllOutCatseyeTexture
                akaliKDAAllOutMaskMaterial.map = akaliKDAAllOutMaskCatseyeTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                catseye.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                akaliKDAAllOutMaterial.map = akaliKDAAllOutPearlTexture
                akaliKDAAllOutMaskMaterial.map = akaliKDAAllOutMaskPearlTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                akaliKDAAllOutMaterial.map = akaliKDAAllOutRoseTexture
                akaliKDAAllOutMaskMaterial.map = akaliKDAAllOutMaskRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                akaliKDAAllOutMaterial.map = akaliKDAAllOutRubyTexture
                akaliKDAAllOutMaskMaterial.map = akaliKDAAllOutMaskRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })

            sapphire.addEventListener('click', () => {
                akaliKDAAllOutMaterial.map = akaliKDAAllOutSapphireTexture
                akaliKDAAllOutMaskMaterial.map = akaliKDAAllOutMaskSapphireTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                sapphire.classList.add('active-chroma')
            })

            baddest.addEventListener('click', () => {
                akaliKDAAllOutMaterial.map = akaliKDAAllOutBaddestTexture
                akaliKDAAllOutMaskMaterial.map = akaliKDAAllOutMaskBaddestTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                baddest.classList.add('active-chroma')
            })

            peridot.addEventListener('click', () => {
                akaliKDAAllOutMaterial.map = akaliKDAAllOutPeridotTexture
                akaliKDAAllOutMaskMaterial.map = akaliKDAAllOutMaskPeridotTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                peridot.classList.add('active-chroma')
            })

            tanzanite.addEventListener('click', () => {
                akaliKDAAllOutMaterial.map = akaliKDAAllOutTanzaniteTexture
                akaliKDAAllOutMaskMaterial.map = akaliKDAAllOutMaskTanzaniteTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                tanzanite.classList.add('active-chroma')
            })
        })

        // AKALI CRIME CITY NIGHTMARE
        akaliCrimeCityNightmare.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let akaliSkin of skins) {akaliSkin.classList.remove('skin-active')}
            akaliCrimeCityNightmare.classList.add('skin-active')
            akaliCrimeCityNightmare.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            akaliCheckboxes.style.display = 'block'
            akaliCheckboxes.appendChild(akaliMaskSwitch)
            akaliCheckboxes.appendChild(akaliMaskLabel)
            akaliMaskLabel.innerHTML = 'Shadow'
            akaliMaskSwitch.checked = true

            // textures
            const akaliCrimeCityNightmareTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/akali.png')
            akaliCrimeCityNightmareTexture.flipY = false
            akaliCrimeCityNightmareTexture.encoding = THREE.sRGBEncoding
            const akaliCrimeCityNightmareShadowTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/shadow.png')
            akaliCrimeCityNightmareShadowTexture.flipY = false
            akaliCrimeCityNightmareShadowTexture.encoding = THREE.sRGBEncoding

            const akaliCrimeCityNightmarePearlTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/pearl/akali.png')
            akaliCrimeCityNightmarePearlTexture.flipY = false
            akaliCrimeCityNightmarePearlTexture.encoding = THREE.sRGBEncoding
            const akaliCrimeCityNightmareShadowPearlTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/pearl/shadow.png')
            akaliCrimeCityNightmareShadowPearlTexture.flipY = false
            akaliCrimeCityNightmareShadowPearlTexture.encoding = THREE.sRGBEncoding

            const akaliCrimeCityNightmareRubyTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/ruby/akali.png')
            akaliCrimeCityNightmareRubyTexture.flipY = false
            akaliCrimeCityNightmareRubyTexture.encoding = THREE.sRGBEncoding
            const akaliCrimeCityNightmareShadowRubyTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/ruby/shadow.png')
            akaliCrimeCityNightmareShadowRubyTexture.flipY = false
            akaliCrimeCityNightmareShadowRubyTexture.encoding = THREE.sRGBEncoding

            const akaliCrimeCityNightmareCatseyeTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/catseye/akali.png')
            akaliCrimeCityNightmareCatseyeTexture.flipY = false
            akaliCrimeCityNightmareCatseyeTexture.encoding = THREE.sRGBEncoding
            const akaliCrimeCityNightmareShadowCatseyeTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/catseye/shadow.png')
            akaliCrimeCityNightmareShadowCatseyeTexture.flipY = false
            akaliCrimeCityNightmareShadowCatseyeTexture.encoding = THREE.sRGBEncoding

            const akaliCrimeCityNightmareRoseTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/rose/akali.png')
            akaliCrimeCityNightmareRoseTexture.flipY = false
            akaliCrimeCityNightmareRoseTexture.encoding = THREE.sRGBEncoding
            const akaliCrimeCityNightmareShadowRoseTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/rose/shadow.png')
            akaliCrimeCityNightmareShadowRoseTexture.flipY = false
            akaliCrimeCityNightmareShadowRoseTexture.encoding = THREE.sRGBEncoding

            const akaliCrimeCityNightmareSapphireTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/sapphire/akali.png')
            akaliCrimeCityNightmareSapphireTexture.flipY = false
            akaliCrimeCityNightmareSapphireTexture.encoding = THREE.sRGBEncoding
            const akaliCrimeCityNightmareShadowSapphireTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/sapphire/shadow.png')
            akaliCrimeCityNightmareShadowSapphireTexture.flipY = false
            akaliCrimeCityNightmareShadowSapphireTexture.encoding = THREE.sRGBEncoding

            const akaliCrimeCityNightmareTanzaniteTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/tanzanite/akali.png')
            akaliCrimeCityNightmareTanzaniteTexture.flipY = false
            akaliCrimeCityNightmareTanzaniteTexture.encoding = THREE.sRGBEncoding
            const akaliCrimeCityNightmareShadowTanzaniteTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/tanzanite/shadow.png')
            akaliCrimeCityNightmareShadowTanzaniteTexture.flipY = false
            akaliCrimeCityNightmareShadowTanzaniteTexture.encoding = THREE.sRGBEncoding

            const akaliCrimeCityNightmareEmeraldTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/emerald/akali.png')
            akaliCrimeCityNightmareEmeraldTexture.flipY = false
            akaliCrimeCityNightmareEmeraldTexture.encoding = THREE.sRGBEncoding
            const akaliCrimeCityNightmareShadowEmeraldTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/emerald/shadow.png')
            akaliCrimeCityNightmareShadowEmeraldTexture.flipY = false
            akaliCrimeCityNightmareShadowEmeraldTexture.encoding = THREE.sRGBEncoding

            const akaliCrimeCityNightmareObsidianTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/obsidian/akali.png')
            akaliCrimeCityNightmareObsidianTexture.flipY = false
            akaliCrimeCityNightmareObsidianTexture.encoding = THREE.sRGBEncoding
            const akaliCrimeCityNightmareShadowObsidianTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/obsidian/shadow.png')
            akaliCrimeCityNightmareShadowObsidianTexture.flipY = false
            akaliCrimeCityNightmareShadowObsidianTexture.encoding = THREE.sRGBEncoding

            const akaliCrimeCityNightmareUndergroundTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/underground/akali.png')
            akaliCrimeCityNightmareUndergroundTexture.flipY = false
            akaliCrimeCityNightmareUndergroundTexture.encoding = THREE.sRGBEncoding
            const akaliCrimeCityNightmareShadowUndergroundTexture = textureLoader.load('models/akali/textures/crime-city-nightmare/underground/shadow.png')
            akaliCrimeCityNightmareShadowUndergroundTexture.flipY = false
            akaliCrimeCityNightmareShadowUndergroundTexture.encoding = THREE.sRGBEncoding

            // materials
            const akaliCrimeCityNightmareMaterial = new THREE.MeshBasicMaterial({map: akaliCrimeCityNightmareTexture})
            const akaliCrimeCityNightmareShadowMaterial = new THREE.MeshBasicMaterial({map: akaliCrimeCityNightmareShadowTexture})


            // load model
            gltfLoader.load(
                'models/akali/akali-crime-city-nightmare.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.017, 0.017, 0.017)
                    gltf.scene.position.set(0, -1.7, 0)
                    const akaliCrimeCityNightmareMesh = gltf.scene.children[0].children.find(child => child.name === 'body') 
                    akaliCrimeCityNightmareMesh.material = akaliCrimeCityNightmareMaterial

                    const akaliCrimeCityNightmareShadowMesh = gltf.scene.children[0].children.find(child => child.name === 'shadow') 
                    akaliCrimeCityNightmareShadowMesh.material = akaliCrimeCityNightmareShadowMaterial

                    akaliMaskSwitch.addEventListener('click', () => {
                        if(akaliMaskSwitch.checked) {
                            akaliCrimeCityNightmareShadowMesh.visible = true
                        } else {
                            akaliCrimeCityNightmareShadowMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            akaliChromas.style.display = 'block'
            akaliChromas.appendChild(ruby)
            akaliChromas.appendChild(underground)
            akaliChromas.appendChild(catseye)
            akaliChromas.appendChild(rose)
            akaliChromas.appendChild(pearl)
            akaliChromas.appendChild(tanzanite)
            akaliChromas.appendChild(obsidian)
            akaliChromas.appendChild(sapphire)
            akaliChromas.appendChild(emerald)

            // remove chromas
            citrine.remove()
            amethyst.remove()
            obsidian.remove()
            emerald.remove()
            rainbow.remove()
            freestyle.remove()
            turquoise.remove()
            reckoning.remove()
            baddest.remove()
            peridot.remove()
                

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaAkali.classList.add('active-chroma')

            noChromaAkali.addEventListener('click', () => {
                akaliCrimeCityNightmareMaterial.map = akaliCrimeCityNightmareTexture
                akaliCrimeCityNightmareShadowMaterial.map = akaliCrimeCityNightmareShadowTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaAkali.classList.add('active-chroma')
            })

            catseye.addEventListener('click', () => {
                akaliCrimeCityNightmareMaterial.map = akaliCrimeCityNightmareCatseyeTexture
                akaliCrimeCityNightmareShadowMaterial.map = akaliCrimeCityNightmareShadowCatseyeTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                catseye.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                akaliCrimeCityNightmareMaterial.map = akaliCrimeCityNightmarePearlTexture
                akaliCrimeCityNightmareShadowMaterial.map = akaliCrimeCityNightmareShadowPearlTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                akaliCrimeCityNightmareMaterial.map = akaliCrimeCityNightmareRoseTexture
                akaliCrimeCityNightmareShadowMaterial.map = akaliCrimeCityNightmareShadowRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                akaliCrimeCityNightmareMaterial.map = akaliCrimeCityNightmareRubyTexture
                akaliCrimeCityNightmareShadowMaterial.map = akaliCrimeCityNightmareShadowRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })

            sapphire.addEventListener('click', () => {
                akaliCrimeCityNightmareMaterial.map = akaliCrimeCityNightmareSapphireTexture
                akaliCrimeCityNightmareShadowMaterial.map = akaliCrimeCityNightmareShadowSapphireTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                sapphire.classList.add('active-chroma')
            })

            tanzanite.addEventListener('click', () => {
                akaliCrimeCityNightmareMaterial.map = akaliCrimeCityNightmareTanzaniteTexture
                akaliCrimeCityNightmareShadowMaterial.map = akaliCrimeCityNightmareShadowTanzaniteTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                tanzanite.classList.add('active-chroma')
            })

            emerald.addEventListener('click', () => {
                akaliCrimeCityNightmareMaterial.map = akaliCrimeCityNightmareEmeraldTexture
                akaliCrimeCityNightmareShadowMaterial.map = akaliCrimeCityNightmareShadowEmeraldTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emerald.classList.add('active-chroma')
            })

            obsidian.addEventListener('click', () => {
                akaliCrimeCityNightmareMaterial.map = akaliCrimeCityNightmareObsidianTexture
                akaliCrimeCityNightmareShadowMaterial.map = akaliCrimeCityNightmareShadowObsidianTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })

            underground.addEventListener('click', () => {
                akaliCrimeCityNightmareMaterial.map = akaliCrimeCityNightmareUndergroundTexture
                akaliCrimeCityNightmareShadowMaterial.map = akaliCrimeCityNightmareShadowUndergroundTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                underground.classList.add('active-chroma')
            })
        })
    })
    })

    // EVELYNN
    evelynnSelectors.forEach(evelynnSelector => {evelynnSelector.addEventListener('click', () => {
        scene.remove(scene.children[1])
        canvas.style.pointerEvents = "all"
        ahriPage.style.opacity = '0'
        ahriPage.style.pointerEvents = 'none'
        akaliPage.style.opacity = '0'
        akaliPage.style.pointerEvents = 'none'
        kaisaPage.style.opacity = '0'
        kaisaPage.style.pointerEvents = 'none'
        seraphinePage.style.opacity = '0'
        seraphinePage.style.pointerEvents = 'none'

        // page setup
        evelynnPage.style.opacity = '1'
        evelynnPage.style.pointerEvents = 'all'
        root.style.setProperty('--primary', "#DA27A5")
        root.style.setProperty('--secondary', "#3391A6")
        root.style.setProperty('--background', "#1F1E3D")
        evelynnChromas.style.display = 'none'

        // skin selection
        for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
        evelynnBase.classList.add('skin-active')
        evelynnBase.scrollIntoView({ behavior: 'smooth', })

        // checkbox
        evelynnCheckboxes.style.display = 'block'
        evelynnCheckboxes.appendChild(evelynnMaskSwitch)
        evelynnCheckboxes.appendChild(evelynnMaskLabel)
        evelynnMaskLabel.innerHTML = 'Mask'
        evelynnMaskSwitch.checked = true

        evelynnGlassesSwitch.remove()
        evelynnGlassesLabel.remove()
    
        // load model
        gltfLoader.load(
            'models/evelynn/evelynn-base.glb',
            (gltf) => {
                scene.remove(scene.children[1])
                gltf.scene.scale.set(0.015, 0.015, 0.015)
                gltf.scene.position.set(0, -1.7, 0)
    
                const evelynnMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 
    
                evelynnMaskSwitch.addEventListener('click', () => {
                    if(evelynnMaskSwitch.checked) {
                        evelynnMaskMesh.visible = true
                    } else {
                        evelynnMaskMesh.visible = false
                    }                  
                })
    
                scene.add(gltf.scene)
            }
        )

        // EVELYNN BASE
        evelynnBase.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnBase.classList.add('skin-active')
            evelynnBase.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'block'
            evelynnCheckboxes.appendChild(evelynnMaskSwitch)
            evelynnCheckboxes.appendChild(evelynnMaskLabel)
            evelynnMaskLabel.innerHTML = 'Mask'
            evelynnMaskSwitch.checked = true

            evelynnGlassesSwitch.remove()
            evelynnGlassesLabel.remove()

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-base.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                    evelynnMaskSwitch.addEventListener('click', () => {
                        if(evelynnMaskSwitch.checked) {
                            evelynnMaskMesh.visible = true
                        } else {
                            evelynnMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'none'
        })

        // EVELYNN SHADOW
        evelynnShadow.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnShadow.classList.add('skin-active')
            evelynnShadow.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'block'
            evelynnCheckboxes.appendChild(evelynnMaskSwitch)
            evelynnCheckboxes.appendChild(evelynnMaskLabel)
            evelynnMaskLabel.innerHTML = 'Mask'
            evelynnMaskSwitch.checked = true

            evelynnGlassesSwitch.remove()
            evelynnGlassesLabel.remove()

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-shadow.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                    evelynnMaskSwitch.addEventListener('click', () => {
                        if(evelynnMaskSwitch.checked) {
                            evelynnMaskMesh.visible = true
                        } else {
                            evelynnMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'none'
        })

        // EVELYNN MASQUERADE
        evelynnMasquerade.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnMasquerade.classList.add('skin-active')
            evelynnMasquerade.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'block'
            evelynnCheckboxes.appendChild(evelynnMaskSwitch)
            evelynnCheckboxes.appendChild(evelynnMaskLabel)
            evelynnMaskLabel.innerHTML = 'Mask'
            evelynnMaskSwitch.checked = true

            evelynnGlassesSwitch.remove()
            evelynnGlassesLabel.remove()

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-masquerade.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                    evelynnMaskSwitch.addEventListener('click', () => {
                        if(evelynnMaskSwitch.checked) {
                            evelynnMaskMesh.visible = true
                        } else {
                            evelynnMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'none'
        })

        // EVELYNN TANGO
        evelynnTango.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnTango.classList.add('skin-active')
            evelynnTango.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'block'
            evelynnCheckboxes.appendChild(evelynnMaskSwitch)
            evelynnCheckboxes.appendChild(evelynnMaskLabel)
            evelynnMaskLabel.innerHTML = 'Mask'
            evelynnMaskSwitch.checked = true

            evelynnGlassesSwitch.remove()
            evelynnGlassesLabel.remove()

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-tango.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                    evelynnMaskSwitch.addEventListener('click', () => {
                        if(evelynnMaskSwitch.checked) {
                            evelynnMaskMesh.visible = true
                        } else {
                            evelynnMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'none'
        })

        // EVELYNN SAFECRACKER
        evelynnSafecracker.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnSafecracker.classList.add('skin-active')
            evelynnSafecracker.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'block'
            evelynnCheckboxes.appendChild(evelynnMaskSwitch)
            evelynnCheckboxes.appendChild(evelynnMaskLabel)
            evelynnMaskLabel.innerHTML = 'Mask'
            evelynnMaskSwitch.checked = true
            evelynnCheckboxes.appendChild(evelynnGlassesSwitch)
            evelynnCheckboxes.appendChild(evelynnGlassesLabel)
            evelynnGlassesLabel.innerHTML = 'Glasses'
            evelynnGlassesSwitch.checked = true

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-safecracker.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 
                    const evelynnGlassesMesh = gltf.scene.children[0].children.find(child => child.name === 'glasses') 

                    evelynnMaskSwitch.addEventListener('click', () => {
                        if(evelynnMaskSwitch.checked) {
                            evelynnMaskMesh.visible = true
                        } else {
                            evelynnMaskMesh.visible = false
                        }                  
                    })

                    evelynnGlassesSwitch.addEventListener('click', () => {
                        if(evelynnGlassesSwitch.checked) {
                            evelynnGlassesMesh.visible = true
                        } else {
                            evelynnGlassesMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'none'
        })

        // EVELYNN BLOOD MOON
        evelynnBloodMoon.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnBloodMoon.classList.add('skin-active')
            evelynnBloodMoon.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'block'
            evelynnCheckboxes.appendChild(evelynnMaskSwitch)
            evelynnCheckboxes.appendChild(evelynnMaskLabel)
            evelynnMaskLabel.innerHTML = 'Mask'
            evelynnMaskSwitch.checked = true

            evelynnGlassesSwitch.remove()
            evelynnGlassesLabel.remove()

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-blood-moon.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnMaskMesh = gltf.scene.children[0].children.find(child => child.name === 'mask') 

                    evelynnMaskSwitch.addEventListener('click', () => {
                        if(evelynnMaskSwitch.checked) {
                            evelynnMaskMesh.visible = true
                        } else {
                            evelynnMaskMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'none'
        })

        // EVELYNN KDA
        evelynnKDA.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnKDA.classList.add('skin-active')
            evelynnKDA.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'block'
            evelynnCheckboxes.appendChild(evelynnGlassesSwitch)
            evelynnCheckboxes.appendChild(evelynnGlassesLabel)
            evelynnGlassesLabel.innerHTML = 'Glasses'
            evelynnGlassesSwitch.checked = true

            evelynnMaskLabel.remove()
            evelynnMaskSwitch.remove()

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-kda.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnGlassesMesh = gltf.scene.children[0].children.find(child => child.name === 'glasses') 

                    evelynnGlassesSwitch.addEventListener('click', () => {
                        if(evelynnGlassesSwitch.checked) {
                            evelynnGlassesMesh.visible = true
                        } else {
                            evelynnGlassesMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'none'
        })

        // EVELYNN KDA PRESTIGE
        evelynnKDAPrestige.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnKDAPrestige.classList.add('skin-active')
            evelynnKDAPrestige.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'block'
            evelynnCheckboxes.appendChild(evelynnGlassesSwitch)
            evelynnCheckboxes.appendChild(evelynnGlassesLabel)
            evelynnGlassesLabel.innerHTML = 'Glasses'
            evelynnGlassesSwitch.checked = true

            evelynnMaskLabel.remove()
            evelynnMaskSwitch.remove()

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-kda-prestige.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnGlassesMesh = gltf.scene.children[0].children.find(child => child.name === 'glasses') 

                    evelynnGlassesSwitch.addEventListener('click', () => {
                        if(evelynnGlassesSwitch.checked) {
                            evelynnGlassesMesh.visible = true
                        } else {
                            evelynnGlassesMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'none'
        })

        // EVELYNN SUGAR RUSH
        evelynnSugarRush.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnSugarRush.classList.add('skin-active')
            evelynnSugarRush.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'none'

            // textures
            const evelynnSugarRushTexture = textureLoader.load('models/evelynn/textures/sugar-rush/evelynn.png')
            evelynnSugarRushTexture.flipY = false
            evelynnSugarRushTexture.encoding = THREE.sRGBEncoding

            const evelynnSugarRushAmethystTexture = textureLoader.load('models/evelynn/textures/sugar-rush/amethyst/evelynn.png')
            evelynnSugarRushAmethystTexture.flipY = false
            evelynnSugarRushAmethystTexture.encoding = THREE.sRGBEncoding

            const evelynnSugarRushJasperTexture = textureLoader.load('models/evelynn/textures/sugar-rush/jasper/evelynn.png')
            evelynnSugarRushJasperTexture.flipY = false
            evelynnSugarRushJasperTexture.encoding = THREE.sRGBEncoding

            const evelynnSugarRushObsidianTexture = textureLoader.load('models/evelynn/textures/sugar-rush/obsidian/evelynn.png')
            evelynnSugarRushObsidianTexture.flipY = false
            evelynnSugarRushObsidianTexture.encoding = THREE.sRGBEncoding

            const evelynnSugarRushRoseTexture = textureLoader.load('models/evelynn/textures/sugar-rush/rose/evelynn.png')
            evelynnSugarRushRoseTexture.flipY = false
            evelynnSugarRushRoseTexture.encoding = THREE.sRGBEncoding

            const evelynnSugarRushRubyTexture = textureLoader.load('models/evelynn/textures/sugar-rush/ruby/evelynn.png')
            evelynnSugarRushRubyTexture.flipY = false
            evelynnSugarRushRubyTexture.encoding = THREE.sRGBEncoding

            const evelynnSugarRushSweetTexture = textureLoader.load('models/evelynn/textures/sugar-rush/jasper/evelynn.png')
            evelynnSugarRushSweetTexture.flipY = false
            evelynnSugarRushSweetTexture.encoding = THREE.sRGBEncoding

            // material
            const evelynnSugarRushMaterial = new THREE.MeshBasicMaterial({map: evelynnSugarRushTexture})

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-sugar-rush.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnSugarRushMesh = gltf.scene.children[0].children.find(child => child.name === 'body')
                    evelynnSugarRushMesh.material = evelynnSugarRushMaterial 

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'block'
            evelynnChromas.appendChild(ruby)
            evelynnChromas.appendChild(jasper)
            evelynnChromas.appendChild(rose)
            evelynnChromas.appendChild(sweet)
            evelynnChromas.appendChild(amethyst)
            evelynnChromas.appendChild(obsidian)

            pearl.remove()
            baddest.remove()
            tanzanite.remove()
            sapphire.remove()
            turquoise.remove()
            emerald.remove()
            dark.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaEvelynn.classList.add('active-chroma')

            noChromaEvelynn.addEventListener('click', () => {
                evelynnSugarRushMaterial.map = evelynnSugarRushTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaEvelynn.classList.add('active-chroma')
            })

            amethyst.addEventListener('click', () => {
                evelynnSugarRushMaterial.map = evelynnSugarRushAmethystTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                amethyst.classList.add('active-chroma')
            })

            jasper.addEventListener('click', () => {
                evelynnSugarRushMaterial.map = evelynnSugarRushJasperTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                jasper.classList.add('active-chroma')
            })

            obsidian.addEventListener('click', () => {
                evelynnSugarRushMaterial.map = evelynnSugarRushObsidianTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                evelynnSugarRushMaterial.map = evelynnSugarRushRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                evelynnSugarRushMaterial.map = evelynnSugarRushRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })

            sweet.addEventListener('click', () => {
                evelynnSugarRushMaterial.map = evelynnSugarRushSweetTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                sweet.classList.add('active-chroma')
            })
        })

        // EVELYNN KDA ALL OUT
        evelynnKDAAllOut.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnKDAAllOut.classList.add('skin-active')
            evelynnKDAAllOut.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'block'
            evelynnCheckboxes.appendChild(evelynnGlassesSwitch)
            evelynnCheckboxes.appendChild(evelynnGlassesLabel)
            evelynnGlassesLabel.innerHTML = 'Glasses'
            evelynnGlassesSwitch.checked = true

            evelynnMaskLabel.remove()
            evelynnMaskSwitch.remove()

            // textures
            const evelynnKDAAllOutTexture = textureLoader.load('models/evelynn/textures/kda-all-out/evelynn.png')
            evelynnKDAAllOutTexture.flipY = false
            evelynnKDAAllOutTexture.encoding = THREE.sRGBEncoding

            const evelynnKDAAllOutPearlTexture = textureLoader.load('models/evelynn/textures/kda-all-out/pearl/evelynn.png')
            evelynnKDAAllOutPearlTexture.flipY = false
            evelynnKDAAllOutPearlTexture.encoding = THREE.sRGBEncoding

            const evelynnKDAAllOutRubyTexture = textureLoader.load('models/evelynn/textures/kda-all-out/ruby/evelynn.png')
            evelynnKDAAllOutRubyTexture.flipY = false
            evelynnKDAAllOutRubyTexture.encoding = THREE.sRGBEncoding

            const evelynnKDAAllOutRoseTexture = textureLoader.load('models/evelynn/textures/kda-all-out/rose/evelynn.png')
            evelynnKDAAllOutRoseTexture.flipY = false
            evelynnKDAAllOutRoseTexture.encoding = THREE.sRGBEncoding

            const evelynnKDAAllOutSapphireTexture = textureLoader.load('models/evelynn/textures/kda-all-out/sapphire/evelynn.png')
            evelynnKDAAllOutSapphireTexture.flipY = false
            evelynnKDAAllOutSapphireTexture.encoding = THREE.sRGBEncoding

            const evelynnKDAAllOutTanzaniteTexture = textureLoader.load('models/evelynn/textures/kda-all-out/tanzanite/evelynn.png')
            evelynnKDAAllOutTanzaniteTexture.flipY = false
            evelynnKDAAllOutTanzaniteTexture.encoding = THREE.sRGBEncoding

            const evelynnKDAAllOutBaddestTexture = textureLoader.load('models/evelynn/textures/kda-all-out/baddest/evelynn.png')
            evelynnKDAAllOutBaddestTexture.flipY = false
            evelynnKDAAllOutBaddestTexture.encoding = THREE.sRGBEncoding

            const evelynnKDAAllOutEmeraldTexture = textureLoader.load('models/evelynn/textures/kda-all-out/emerald/evelynn.png')
            evelynnKDAAllOutEmeraldTexture.flipY = false
            evelynnKDAAllOutEmeraldTexture.encoding = THREE.sRGBEncoding

            const evelynnKDAAllOutTurquoiseTexture = textureLoader.load('models/evelynn/textures/kda-all-out/turquoise/evelynn.png')
            evelynnKDAAllOutTurquoiseTexture.flipY = false
            evelynnKDAAllOutTurquoiseTexture.encoding = THREE.sRGBEncoding

            // material
            const evelynnKDAAllOutMaterial = new THREE.MeshBasicMaterial({map: evelynnKDAAllOutTexture})

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-kda-all-out.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnKDAAllOutMesh = gltf.scene.children[0].children.find(child => child.name === 'body')
                    evelynnKDAAllOutMesh.material = evelynnKDAAllOutMaterial 

                    const evelynnGlassesMesh = gltf.scene.children[0].children.find(child => child.name === 'glasses')
                    evelynnGlassesMesh.material = evelynnKDAAllOutMaterial

                    evelynnGlassesSwitch.addEventListener('click', () => {
                        if(evelynnGlassesSwitch.checked) {
                            evelynnGlassesMesh.visible = true
                        } else {
                            evelynnGlassesMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'block'
            evelynnChromas.appendChild(ruby)
            evelynnChromas.appendChild(rose)
            evelynnChromas.appendChild(pearl)
            evelynnChromas.appendChild(baddest)
            evelynnChromas.appendChild(tanzanite)
            evelynnChromas.appendChild(sapphire)
            evelynnChromas.appendChild(turquoise)
            evelynnChromas.appendChild(emerald)

            jasper.remove()
            sweet.remove()
            amethyst.remove()
            obsidian.remove()
            dark.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaEvelynn.classList.add('active-chroma')

            noChromaEvelynn.addEventListener('click', () => {
                evelynnKDAAllOutMaterial.map = evelynnKDAAllOutTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaEvelynn.classList.add('active-chroma')
            })

            baddest.addEventListener('click', () => {
                evelynnKDAAllOutMaterial.map = evelynnKDAAllOutBaddestTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                baddest.classList.add('active-chroma')
            })

            emerald.addEventListener('click', () => {
                evelynnKDAAllOutMaterial.map = evelynnKDAAllOutEmeraldTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emerald.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                evelynnKDAAllOutMaterial.map = evelynnKDAAllOutPearlTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                evelynnKDAAllOutMaterial.map = evelynnKDAAllOutRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                evelynnKDAAllOutMaterial.map = evelynnKDAAllOutRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })

            sapphire.addEventListener('click', () => {
                evelynnKDAAllOutMaterial.map = evelynnKDAAllOutSapphireTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                sapphire.classList.add('active-chroma')
            })

            tanzanite.addEventListener('click', () => {
                evelynnKDAAllOutMaterial.map = evelynnKDAAllOutTanzaniteTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                tanzanite.classList.add('active-chroma')
            })

            turquoise.addEventListener('click', () => {
                evelynnKDAAllOutMaterial.map = evelynnKDAAllOutTurquoiseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                turquoise.classList.add('active-chroma')
            })
        })

        // EVELYNN COVEN
        evelynnCoven.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let evelynnSkin of skins) {evelynnSkin.classList.remove('skin-active')}
            evelynnCoven.classList.add('skin-active')
            evelynnCoven.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            evelynnCheckboxes.style.display = 'block'
            evelynnCheckboxes.appendChild(evelynnGlassesSwitch)
            evelynnCheckboxes.appendChild(evelynnGlassesLabel)
            evelynnGlassesLabel.innerHTML = 'Shadow'
            evelynnGlassesSwitch.checked = true

            evelynnMaskLabel.remove()
            evelynnMaskSwitch.remove()

            // textures
            const evelynnCovenTexture = textureLoader.load('models/evelynn/textures/coven/evelynn.png')
            evelynnCovenTexture.flipY = false
            evelynnCovenTexture.encoding = THREE.sRGBEncoding
            const evelynnCovenShadowTexture = textureLoader.load('models/evelynn/textures/coven/shadow.png')
            evelynnCovenShadowTexture.flipY = false
            evelynnCovenShadowTexture.encoding = THREE.sRGBEncoding

            const evelynnCovenPearlTexture = textureLoader.load('models/evelynn/textures/coven/pearl/evelynn.png')
            evelynnCovenPearlTexture.flipY = false
            evelynnCovenPearlTexture.encoding = THREE.sRGBEncoding
            const evelynnCovenPearlShadowTexture = textureLoader.load('models/evelynn/textures/coven/pearl/shadow.png')
            evelynnCovenPearlShadowTexture.flipY = false
            evelynnCovenPearlShadowTexture.encoding = THREE.sRGBEncoding

            const evelynnCovenRubyTexture = textureLoader.load('models/evelynn/textures/coven/ruby/evelynn.png')
            evelynnCovenRubyTexture.flipY = false
            evelynnCovenRubyTexture.encoding = THREE.sRGBEncoding
            const evelynnCovenRubyShadowTexture = textureLoader.load('models/evelynn/textures/coven/ruby/shadow.png')
            evelynnCovenRubyShadowTexture.flipY = false
            evelynnCovenRubyShadowTexture.encoding = THREE.sRGBEncoding

            const evelynnCovenRoseTexture = textureLoader.load('models/evelynn/textures/coven/rose/evelynn.png')
            evelynnCovenRoseTexture.flipY = false
            evelynnCovenRoseTexture.encoding = THREE.sRGBEncoding
            const evelynnCovenRoseShadowTexture = textureLoader.load('models/evelynn/textures/coven/rose/shadow.png')
            evelynnCovenRoseShadowTexture.flipY = false
            evelynnCovenRoseShadowTexture.encoding = THREE.sRGBEncoding

            const evelynnCovenSapphireTexture = textureLoader.load('models/evelynn/textures/coven/sapphire/evelynn.png')
            evelynnCovenSapphireTexture.flipY = false
            evelynnCovenSapphireTexture.encoding = THREE.sRGBEncoding
            const evelynnCovenSapphireShadowTexture = textureLoader.load('models/evelynn/textures/coven/sapphire/shadow.png')
            evelynnCovenSapphireShadowTexture.flipY = false
            evelynnCovenSapphireShadowTexture.encoding = THREE.sRGBEncoding

            const evelynnCovenDarkTexture = textureLoader.load('models/evelynn/textures/coven/dark/evelynn.png')
            evelynnCovenDarkTexture.flipY = false
            evelynnCovenDarkTexture.encoding = THREE.sRGBEncoding
            const evelynnCovenDarkShadowTexture = textureLoader.load('models/evelynn/textures/coven/dark/shadow.png')
            evelynnCovenDarkShadowTexture.flipY = false
            evelynnCovenDarkShadowTexture.encoding = THREE.sRGBEncoding

            const evelynnCovenObsidianTexture = textureLoader.load('models/evelynn/textures/coven/obsidian/evelynn.png')
            evelynnCovenObsidianTexture.flipY = false
            evelynnCovenObsidianTexture.encoding = THREE.sRGBEncoding
            const evelynnCovenObsidianShadowTexture = textureLoader.load('models/evelynn/textures/coven/obsidian/shadow.png')
            evelynnCovenObsidianShadowTexture.flipY = false
            evelynnCovenObsidianShadowTexture.encoding = THREE.sRGBEncoding

            // material
            const evelynnCovenMaterial = new THREE.MeshBasicMaterial({map: evelynnCovenTexture})
            const evelynnCovenShadowMaterial = new THREE.MeshBasicMaterial({map: evelynnCovenShadowTexture})

            // load model
            gltfLoader.load(
                'models/evelynn/evelynn-coven.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.7, 0)

                    const evelynnCovenMesh = gltf.scene.children[0].children.find(child => child.name === 'body')
                    evelynnCovenMesh.material = evelynnCovenMaterial 

                    const evelynnShadowMesh = gltf.scene.children[0].children.find(child => child.name === 'shadow')
                    evelynnShadowMesh.material = evelynnCovenShadowMaterial

                    evelynnGlassesSwitch.addEventListener('click', () => {
                        if(evelynnGlassesSwitch.checked) {
                            evelynnShadowMesh.visible = true
                        } else {
                            evelynnShadowMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            evelynnChromas.style.display = 'block'
            evelynnChromas.appendChild(ruby)
            evelynnChromas.appendChild(dark)
            evelynnChromas.appendChild(rose)
            evelynnChromas.appendChild(pearl)
            evelynnChromas.appendChild(obsidian)
            evelynnChromas.appendChild(sapphire)

            turquoise.remove()
            emerald.remove()
            baddest.remove()
            tanzanite.remove()
            jasper.remove()
            sweet.remove()
            amethyst.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaEvelynn.classList.add('active-chroma')

            noChromaEvelynn.addEventListener('click', () => {
                evelynnCovenMaterial.map = evelynnCovenTexture
                evelynnCovenShadowMaterial.map = evelynnCovenShadowTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaEvelynn.classList.add('active-chroma')
            })

            dark.addEventListener('click', () => {
                evelynnCovenMaterial.map = evelynnCovenDarkTexture
                evelynnCovenShadowMaterial.map = evelynnCovenDarkShadowTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                dark.classList.add('active-chroma')
            })

            obsidian.addEventListener('click', () => {
                evelynnCovenMaterial.map = evelynnCovenObsidianTexture
                evelynnCovenShadowMaterial.map = evelynnCovenObsidianShadowTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                evelynnCovenMaterial.map = evelynnCovenPearlTexture
                evelynnCovenShadowMaterial.map = evelynnCovenPearlShadowTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                evelynnCovenMaterial.map = evelynnCovenRoseTexture
                evelynnCovenShadowMaterial.map = evelynnCovenRoseShadowTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                evelynnCovenMaterial.map = evelynnCovenRubyTexture
                evelynnCovenShadowMaterial.map = evelynnCovenRubyShadowTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })

            sapphire.addEventListener('click', () => {
                evelynnCovenMaterial.map = evelynnCovenSapphireTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                sapphire.classList.add('active-chroma')
            })

        })
    
    })
    })

    // KAISA
    kaisaSelectors.forEach(kaisaSelector => {kaisaSelector.addEventListener('click', () => {
        scene.remove(scene.children[1])
        canvas.style.pointerEvents = "all"
        ahriPage.style.opacity = '0'
        ahriPage.style.pointerEvents = 'none'
        akaliPage.style.opacity = '0'
        akaliPage.style.pointerEvents = 'none'
        evelynnPage.style.opacity = '0'
        evelynnPage.style.pointerEvents = 'none'
        seraphinePage.style.opacity = '0'
        seraphinePage.style.pointerEvents = 'none'

        // page setup
        kaisaPage.style.opacity = '1'
        kaisaPage.style.pointerEvents = 'all'
        root.style.setProperty('--primary', "#7F2CB0")
        root.style.setProperty('--secondary', "#5056BF")
        root.style.setProperty('--background', "#191726")
        kaisaChromas.style.display = 'none'

        // skin selection
        for(let kaisaSkin of skins) {kaisaSkin.classList.remove('skin-active')}
        kaisaBase.classList.add('skin-active')
        kaisaBase.scrollIntoView({ behavior: 'smooth', })

        // checkbox
        kaisaCheckboxes.style.display = 'block'
        kaisaCheckboxes.appendChild(kaisaHelmetSwitch)
        kaisaCheckboxes.appendChild(kaisaHelmetLabel)
        kaisaHelmetLabel.innerHTML = 'Helmet'
        kaisaHelmetSwitch.checked = true

        kaisaCheckboxes.appendChild(kaisaPistolsSwitch)
        kaisaCheckboxes.appendChild(kaisaPistolsLabel)
        kaisaPistolsLabel.innerHTML = 'Pistols'
        kaisaPistolsSwitch.checked = true
    
        // load model
        gltfLoader.load(
            'models/kaisa/kaisa-base.glb',
            (gltf) => {
                scene.remove(scene.children[1])
                gltf.scene.scale.set(0.015, 0.015, 0.015)
                gltf.scene.position.set(0, -1.3, 0)
    
                const kaisaHelmetMesh = gltf.scene.children[0].children.find(child => child.name === 'helmet') 
                const kaisaPistolsMesh = gltf.scene.children[0].children.find(child => child.name === 'pistols')
    
                kaisaHelmetSwitch.addEventListener('click', () => {
                    if(kaisaHelmetSwitch.checked) {
                        kaisaHelmetMesh.visible = true
                    } else {
                        kaisaHelmetMesh.visible = false
                    }                  
                })

                kaisaPistolsSwitch.addEventListener('click', () => {
                    if(kaisaPistolsSwitch.checked) {
                        kaisaPistolsMesh.visible = true
                    } else {
                        kaisaPistolsMesh.visible = false
                    }                  
                })
    
                scene.add(gltf.scene)
            }
        )

        // KAISA BASE
        kaisaBase.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let kaisaSkin of skins) {kaisaSkin.classList.remove('skin-active')}
            kaisaBase.classList.add('skin-active')
            kaisaBase.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            kaisaCheckboxes.style.display = 'block'
            kaisaCheckboxes.appendChild(kaisaHelmetSwitch)
            kaisaCheckboxes.appendChild(kaisaHelmetLabel)
            kaisaHelmetLabel.innerHTML = 'Helmet'
            kaisaHelmetSwitch.checked = true

            kaisaCheckboxes.appendChild(kaisaPistolsSwitch)
            kaisaCheckboxes.appendChild(kaisaPistolsLabel)
            kaisaPistolsLabel.innerHTML = 'Pistols'
            kaisaPistolsSwitch.checked = true

            // load model
            gltfLoader.load(
                'models/kaisa/kaisa-base.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)

                    const kaisaHelmetMesh = gltf.scene.children[0].children.find(child => child.name === 'helmet') 
                    const kaisaPistolsMesh = gltf.scene.children[0].children.find(child => child.name === 'pistols')
    
                    kaisaHelmetSwitch.addEventListener('click', () => {
                        if(kaisaHelmetSwitch.checked) {
                            kaisaHelmetMesh.visible = true
                        } else {
                            kaisaHelmetMesh.visible = false
                        }                  
                    })
        
                    kaisaPistolsSwitch.addEventListener('click', () => {
                        if(kaisaPistolsSwitch.checked) {
                            kaisaPistolsMesh.visible = true
                        } else {
                            kaisaPistolsMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            kaisaChromas.style.display = 'none'
        })

        // KAISA BULLET ANGEL
        kaisaBulletAngel.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let kaisaSkin of skins) {kaisaSkin.classList.remove('skin-active')}
            kaisaBulletAngel.classList.add('skin-active')
            kaisaBulletAngel.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            kaisaCheckboxes.style.display = 'block'
            kaisaCheckboxes.appendChild(kaisaHelmetSwitch)
            kaisaCheckboxes.appendChild(kaisaHelmetLabel)
            kaisaHelmetLabel.innerHTML = 'Helmet'
            kaisaHelmetSwitch.checked = true
            
            kaisaCheckboxes.appendChild(kaisaPistolsSwitch)
            kaisaCheckboxes.appendChild(kaisaPistolsLabel)
            kaisaPistolsLabel.innerHTML = 'Pistols'
            kaisaPistolsSwitch.checked = true

            // textures
            const kaisaBulletAngelTexture = textureLoader.load('models/kaisa/textures/bullet-angel/kaisa.png')
            kaisaBulletAngelTexture.flipY = false
            kaisaBulletAngelTexture.encoding = THREE.sRGBEncoding
            const kaisaBulletAngelPistolsTexture = textureLoader.load('models/kaisa/textures/bullet-angel/pistols.png')
            kaisaBulletAngelPistolsTexture.flipY = false
            kaisaBulletAngelPistolsTexture.encoding = THREE.sRGBEncoding

            const kaisaBulletAngelAmethystTexture = textureLoader.load('models/kaisa/textures/bullet-angel/amethyst/kaisa.png')
            kaisaBulletAngelAmethystTexture.flipY = false
            kaisaBulletAngelAmethystTexture.encoding = THREE.sRGBEncoding
            const kaisaBulletAngelPistolsAmethystTexture = textureLoader.load('models/kaisa/textures/bullet-angel/amethyst/pistols.png')
            kaisaBulletAngelPistolsAmethystTexture.flipY = false
            kaisaBulletAngelPistolsAmethystTexture.encoding = THREE.sRGBEncoding

            const kaisaBulletAngelAquamarineTexture = textureLoader.load('models/kaisa/textures/bullet-angel/aquamarine/kaisa.png')
            kaisaBulletAngelAquamarineTexture.flipY = false
            kaisaBulletAngelAquamarineTexture.encoding = THREE.sRGBEncoding
            const kaisaBulletAngelPistolsAquamarineTexture = textureLoader.load('models/kaisa/textures/bullet-angel/aquamarine/pistols.png')
            kaisaBulletAngelPistolsAquamarineTexture.flipY = false
            kaisaBulletAngelPistolsAquamarineTexture.encoding = THREE.sRGBEncoding

            const kaisaBulletAngelCatseyeTexture = textureLoader.load('models/kaisa/textures/bullet-angel/catseye/kaisa.png')
            kaisaBulletAngelCatseyeTexture.flipY = false
            kaisaBulletAngelCatseyeTexture.encoding = THREE.sRGBEncoding
            const kaisaBulletAngelPistolsCatseyeTexture = textureLoader.load('models/kaisa/textures/bullet-angel/catseye/pistols.png')
            kaisaBulletAngelPistolsCatseyeTexture.flipY = false
            kaisaBulletAngelPistolsCatseyeTexture.encoding = THREE.sRGBEncoding

            const kaisaBulletAngelGraniteTexture = textureLoader.load('models/kaisa/textures/bullet-angel/granite/kaisa.png')
            kaisaBulletAngelGraniteTexture.flipY = false
            kaisaBulletAngelGraniteTexture.encoding = THREE.sRGBEncoding
            const kaisaBulletAngelPistolsGraniteTexture = textureLoader.load('models/kaisa/textures/bullet-angel/granite/pistols.png')
            kaisaBulletAngelPistolsGraniteTexture.flipY = false
            kaisaBulletAngelPistolsGraniteTexture.encoding = THREE.sRGBEncoding

            const kaisaBulletAngelObsidianTexture = textureLoader.load('models/kaisa/textures/bullet-angel/obsidian/kaisa.png')
            kaisaBulletAngelObsidianTexture.flipY = false
            kaisaBulletAngelObsidianTexture.encoding = THREE.sRGBEncoding
            const kaisaBulletAngelPistolsObsidianTexture = textureLoader.load('models/kaisa/textures/bullet-angel/obsidian/pistols.png')
            kaisaBulletAngelPistolsObsidianTexture.flipY = false
            kaisaBulletAngelPistolsObsidianTexture.encoding = THREE.sRGBEncoding

            const kaisaBulletAngelPearlTexture = textureLoader.load('models/kaisa/textures/bullet-angel/pearl/kaisa.png')
            kaisaBulletAngelPearlTexture.flipY = false
            kaisaBulletAngelPearlTexture.encoding = THREE.sRGBEncoding
            const kaisaBulletAngelPistolsPearlTexture = textureLoader.load('models/kaisa/textures/bullet-angel/pearl/pistols.png')
            kaisaBulletAngelPistolsPearlTexture.flipY = false
            kaisaBulletAngelPistolsPearlTexture.encoding = THREE.sRGBEncoding

            const kaisaBulletAngelRoseTexture = textureLoader.load('models/kaisa/textures/bullet-angel/rose/kaisa.png')
            kaisaBulletAngelRoseTexture.flipY = false
            kaisaBulletAngelRoseTexture.encoding = THREE.sRGBEncoding
            const kaisaBulletAngelPistolsRoseTexture = textureLoader.load('models/kaisa/textures/bullet-angel/rose/pistols.png')
            kaisaBulletAngelPistolsRoseTexture.flipY = false
            kaisaBulletAngelPistolsRoseTexture.encoding = THREE.sRGBEncoding

            const kaisaBulletAngelRubyTexture = textureLoader.load('models/kaisa/textures/bullet-angel/ruby/kaisa.png')
            kaisaBulletAngelRubyTexture.flipY = false
            kaisaBulletAngelRubyTexture.encoding = THREE.sRGBEncoding
            const kaisaBulletAngelPistolsRubyTexture = textureLoader.load('models/kaisa/textures/bullet-angel/ruby/pistols.png')
            kaisaBulletAngelPistolsRubyTexture.flipY = false
            kaisaBulletAngelPistolsRubyTexture.encoding = THREE.sRGBEncoding


            // material
            const kaisaBulletAngelMaterial = new THREE.MeshBasicMaterial({map: kaisaBulletAngelTexture})
            const kaisaBulletAngelPistolsMaterial = new THREE.MeshBasicMaterial({map: kaisaBulletAngelPistolsTexture})

            // load model
            gltfLoader.load(
                'models/kaisa/kaisa-bullet-angel.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)

                    const kaisaBulletAngelMesh = gltf.scene.children[0].children.find(child => child.name === 'body')
                    kaisaBulletAngelMesh.material = kaisaBulletAngelMaterial 
                    const kaisaBulletAngelHelmetMesh = gltf.scene.children[0].children.find(child => child.name === 'helmet') 
                    kaisaBulletAngelHelmetMesh.material = kaisaBulletAngelMaterial 
                    const kaisaBulletAngelPistolsMesh = gltf.scene.children[0].children.find(child => child.name === 'pistols')
                    kaisaBulletAngelPistolsMesh.material = kaisaBulletAngelPistolsMaterial 
    
                    kaisaHelmetSwitch.addEventListener('click', () => {
                        if(kaisaHelmetSwitch.checked) {
                            kaisaBulletAngelHelmetMesh.visible = true
                        } else {
                            kaisaBulletAngelHelmetMesh.visible = false
                        }                  
                    })
        
                    kaisaPistolsSwitch.addEventListener('click', () => {
                        if(kaisaPistolsSwitch.checked) {
                            kaisaBulletAngelPistolsMesh.visible = true
                        } else {
                            kaisaBulletAngelPistolsMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            kaisaChromas.style.display = 'block'
            kaisaChromas.appendChild(ruby)
            kaisaChromas.appendChild(catseye)
            kaisaChromas.appendChild(rose)
            kaisaChromas.appendChild(amethyst)
            kaisaChromas.appendChild(pearl)
            kaisaChromas.appendChild(obsidian)
            kaisaChromas.appendChild(aquamarine)
            kaisaChromas.appendChild(granite)

            // remove chromas
            emerald.remove()
            ko.remove()
            baddest.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaKaisa.classList.add('active-chroma')

            noChromaKaisa.addEventListener('click', () => {
                kaisaBulletAngelMaterial.map = kaisaBulletAngelTexture
                kaisaBulletAngelPistolsMaterial.map = kaisaBulletAngelPistolsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaKaisa.classList.add('active-chroma')
            })

            amethyst.addEventListener('click', () => {
                kaisaBulletAngelMaterial.map = kaisaBulletAngelAmethystTexture
                kaisaBulletAngelPistolsMaterial.map = kaisaBulletAngelPistolsAmethystTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                amethyst.classList.add('active-chroma')
            })

            aquamarine.addEventListener('click', () => {
                kaisaBulletAngelMaterial.map = kaisaBulletAngelAmethystTexture
                kaisaBulletAngelPistolsMaterial.map = kaisaBulletAngelPistolsAquamarineTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                aquamarine.classList.add('active-chroma')
            })

            catseye.addEventListener('click', () => {
                kaisaBulletAngelMaterial.map = kaisaBulletAngelCatseyeTexture
                kaisaBulletAngelPistolsMaterial.map = kaisaBulletAngelPistolsCatseyeTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                catseye.classList.add('active-chroma')
            })

            granite.addEventListener('click', () => {
                kaisaBulletAngelMaterial.map = kaisaBulletAngelGraniteTexture
                kaisaBulletAngelPistolsMaterial.map = kaisaBulletAngelPistolsGraniteTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                granite.classList.add('active-chroma')
            })

            obsidian.addEventListener('click', () => {
                kaisaBulletAngelMaterial.map = kaisaBulletAngelObsidianTexture
                kaisaBulletAngelPistolsMaterial.map = kaisaBulletAngelPistolsObsidianTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                kaisaBulletAngelMaterial.map = kaisaBulletAngelPearlTexture
                kaisaBulletAngelPistolsMaterial.map = kaisaBulletAngelPistolsPearlTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                kaisaBulletAngelMaterial.map = kaisaBulletAngelRoseTexture
                kaisaBulletAngelPistolsMaterial.map = kaisaBulletAngelPistolsRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                kaisaBulletAngelMaterial.map = kaisaBulletAngelRubyTexture
                kaisaBulletAngelPistolsMaterial.map = kaisaBulletAngelPistolsRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })
        })

        // KAISA KDA
        kaisaKDA.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let kaisaSkin of skins) {kaisaSkin.classList.remove('skin-active')}
            kaisaKDA.classList.add('skin-active')
            kaisaKDA.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            kaisaCheckboxes.style.display = 'block'
            kaisaCheckboxes.appendChild(kaisaHelmetSwitch)
            kaisaCheckboxes.appendChild(kaisaHelmetLabel)
            kaisaHelmetLabel.innerHTML = 'Helmet'
            kaisaHelmetSwitch.checked = true

            kaisaCheckboxes.appendChild(kaisaPistolsSwitch)
            kaisaCheckboxes.appendChild(kaisaPistolsLabel)
            kaisaPistolsLabel.innerHTML = 'Pistols'
            kaisaPistolsSwitch.checked = true

            // load model
            gltfLoader.load(
                'models/kaisa/kaisa-kda.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)

                    const kaisaHelmetMesh = gltf.scene.children[0].children.find(child => child.name === 'helmet') 
                    const kaisaPistolsMesh = gltf.scene.children[0].children.find(child => child.name === 'pistols')
    
                    kaisaHelmetSwitch.addEventListener('click', () => {
                        if(kaisaHelmetSwitch.checked) {
                            kaisaHelmetMesh.visible = true
                        } else {
                            kaisaHelmetMesh.visible = false
                        }                  
                    })
        
                    kaisaPistolsSwitch.addEventListener('click', () => {
                        if(kaisaPistolsSwitch.checked) {
                            kaisaPistolsMesh.visible = true
                        } else {
                            kaisaPistolsMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            kaisaChromas.style.display = 'none'
        })

        // KAISA KDA PRESTIGE
        kaisaKDAPrestige.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let kaisaSkin of skins) {kaisaSkin.classList.remove('skin-active')}
            kaisaKDAPrestige.classList.add('skin-active')
            kaisaKDAPrestige.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            kaisaCheckboxes.style.display = 'block'
            kaisaCheckboxes.appendChild(kaisaHelmetSwitch)
            kaisaCheckboxes.appendChild(kaisaHelmetLabel)
            kaisaHelmetLabel.innerHTML = 'Helmet'
            kaisaHelmetSwitch.checked = true

            kaisaCheckboxes.appendChild(kaisaPistolsSwitch)
            kaisaCheckboxes.appendChild(kaisaPistolsLabel)
            kaisaPistolsLabel.innerHTML = 'Pistols'
            kaisaPistolsSwitch.checked = true

            // load model
            gltfLoader.load(
                'models/kaisa/kaisa-kda-prestige.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)

                    const kaisaHelmetMesh = gltf.scene.children[0].children.find(child => child.name === 'helmet') 
                    const kaisaPistolsMesh = gltf.scene.children[0].children.find(child => child.name === 'pistols')
    
                    kaisaHelmetSwitch.addEventListener('click', () => {
                        if(kaisaHelmetSwitch.checked) {
                            kaisaHelmetMesh.visible = true
                        } else {
                            kaisaHelmetMesh.visible = false
                        }                  
                    })
        
                    kaisaPistolsSwitch.addEventListener('click', () => {
                        if(kaisaPistolsSwitch.checked) {
                            kaisaPistolsMesh.visible = true
                        } else {
                            kaisaPistolsMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            kaisaChromas.style.display = 'none'
        })

        // KAISA IG
        kaisaIG.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let kaisaSkin of skins) {kaisaSkin.classList.remove('skin-active')}
            kaisaIG.classList.add('skin-active')
            kaisaIG.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            kaisaCheckboxes.style.display = 'block'
            kaisaCheckboxes.appendChild(kaisaHelmetSwitch)
            kaisaCheckboxes.appendChild(kaisaHelmetLabel)
            kaisaHelmetLabel.innerHTML = 'Helmet'
            kaisaHelmetSwitch.checked = true

            kaisaCheckboxes.appendChild(kaisaPistolsSwitch)
            kaisaCheckboxes.appendChild(kaisaPistolsLabel)
            kaisaPistolsLabel.innerHTML = 'Pistols'
            kaisaPistolsSwitch.checked = true

            // load model
            gltfLoader.load(
                'models/kaisa/kaisa-ig.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)

                    const kaisaHelmetMesh = gltf.scene.children[0].children.find(child => child.name === 'helmet') 
                    const kaisaPistolsMesh = gltf.scene.children[0].children.find(child => child.name === 'pistols')
    
                    kaisaHelmetSwitch.addEventListener('click', () => {
                        if(kaisaHelmetSwitch.checked) {
                            kaisaHelmetMesh.visible = true
                        } else {
                            kaisaHelmetMesh.visible = false
                        }                  
                    })
        
                    kaisaPistolsSwitch.addEventListener('click', () => {
                        if(kaisaPistolsSwitch.checked) {
                            kaisaPistolsMesh.visible = true
                        } else {
                            kaisaPistolsMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            kaisaChromas.style.display = 'none'
        })

        // KAISA ARCADE
        kaisaArcade.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let kaisaSkin of skins) {kaisaSkin.classList.remove('skin-active')}
            kaisaArcade.classList.add('skin-active')
            kaisaArcade.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            kaisaCheckboxes.style.display = 'block'
            kaisaCheckboxes.appendChild(kaisaHelmetSwitch)
            kaisaCheckboxes.appendChild(kaisaHelmetLabel)
            kaisaHelmetLabel.innerHTML = 'Helmet'
            kaisaHelmetSwitch.checked = true
            
            kaisaCheckboxes.appendChild(kaisaPistolsSwitch)
            kaisaCheckboxes.appendChild(kaisaPistolsLabel)
            kaisaPistolsLabel.innerHTML = 'Pistols'
            kaisaPistolsSwitch.checked = true

            // textures
            const kaisaArcadeTexture = textureLoader.load('models/kaisa/textures/arcade/kaisa.png')
            kaisaArcadeTexture.flipY = false
            kaisaArcadeTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadePistolsTexture = textureLoader.load('models/kaisa/textures/arcade/pistols.png')
            kaisaArcadePistolsTexture.flipY = false
            kaisaArcadePistolsTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadeShouldersTexture = textureLoader.load('models/kaisa/textures/arcade/shoulders.png')
            kaisaArcadeShouldersTexture.flipY = false
            kaisaArcadeShouldersTexture.encoding = THREE.sRGBEncoding

            const kaisaArcadeAmethystTexture = textureLoader.load('models/kaisa/textures/arcade/amethyst/kaisa.png')
            kaisaArcadeAmethystTexture.flipY = false
            kaisaArcadeAmethystTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadePistolsAmethystTexture = textureLoader.load('models/kaisa/textures/arcade/amethyst/pistols.png')
            kaisaArcadePistolsAmethystTexture.flipY = false
            kaisaArcadePistolsAmethystTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadeShouldersAmethystTexture = textureLoader.load('models/kaisa/textures/arcade/amethyst/shoulders.png')
            kaisaArcadeShouldersAmethystTexture.flipY = false
            kaisaArcadeShouldersAmethystTexture.encoding = THREE.sRGBEncoding

            const kaisaArcadeAquamarineTexture = textureLoader.load('models/kaisa/textures/arcade/aquamarine/kaisa.png')
            kaisaArcadeAquamarineTexture.flipY = false
            kaisaArcadeAquamarineTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadePistolsAquamarineTexture = textureLoader.load('models/kaisa/textures/arcade/aquamarine/pistols.png')
            kaisaArcadePistolsAquamarineTexture.flipY = false
            kaisaArcadePistolsAquamarineTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadeShouldersAquamarineTexture = textureLoader.load('models/kaisa/textures/arcade/aquamarine/shoulders.png')
            kaisaArcadeShouldersAquamarineTexture.flipY = false
            kaisaArcadeShouldersAquamarineTexture.encoding = THREE.sRGBEncoding

            const kaisaArcadeCatseyeTexture = textureLoader.load('models/kaisa/textures/arcade/catseye/kaisa.png')
            kaisaArcadeCatseyeTexture.flipY = false
            kaisaArcadeCatseyeTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadePistolsCatseyeTexture = textureLoader.load('models/kaisa/textures/arcade/catseye/pistols.png')
            kaisaArcadePistolsCatseyeTexture.flipY = false
            kaisaArcadePistolsCatseyeTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadeShouldersCatseyeTexture = textureLoader.load('models/kaisa/textures/arcade/catseye/shoulders.png')
            kaisaArcadeShouldersCatseyeTexture.flipY = false
            kaisaArcadeShouldersCatseyeTexture.encoding = THREE.sRGBEncoding

            const kaisaArcadeEmeraldTexture = textureLoader.load('models/kaisa/textures/arcade/emerald/kaisa.png')
            kaisaArcadeEmeraldTexture.flipY = false
            kaisaArcadeEmeraldTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadePistolsEmeraldTexture = textureLoader.load('models/kaisa/textures/arcade/emerald/pistols.png')
            kaisaArcadePistolsEmeraldTexture.flipY = false
            kaisaArcadePistolsEmeraldTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadeShouldersEmeraldTexture = textureLoader.load('models/kaisa/textures/arcade/emerald/shoulders.png')
            kaisaArcadeShouldersEmeraldTexture.flipY = false
            kaisaArcadeShouldersEmeraldTexture.encoding = THREE.sRGBEncoding

            const kaisaArcadeObsidianTexture = textureLoader.load('models/kaisa/textures/arcade/obsidian/kaisa.png')
            kaisaArcadeObsidianTexture.flipY = false
            kaisaArcadeObsidianTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadePistolsObsidianTexture = textureLoader.load('models/kaisa/textures/arcade/obsidian/pistols.png')
            kaisaArcadePistolsObsidianTexture.flipY = false
            kaisaArcadePistolsObsidianTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadeShouldersObsidianTexture = textureLoader.load('models/kaisa/textures/arcade/obsidian/shoulders.png')
            kaisaArcadeShouldersObsidianTexture.flipY = false
            kaisaArcadeShouldersObsidianTexture.encoding = THREE.sRGBEncoding

            const kaisaArcadeKOTexture = textureLoader.load('models/kaisa/textures/arcade/ko/kaisa.png')
            kaisaArcadeKOTexture.flipY = false
            kaisaArcadeKOTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadePistolsKOTexture = textureLoader.load('models/kaisa/textures/arcade/ko/pistols.png')
            kaisaArcadePistolsKOTexture.flipY = false
            kaisaArcadePistolsKOTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadeShouldersKOTexture = textureLoader.load('models/kaisa/textures/arcade/ko/shoulders.png')
            kaisaArcadeShouldersKOTexture.flipY = false
            kaisaArcadeShouldersKOTexture.encoding = THREE.sRGBEncoding

            const kaisaArcadeRoseTexture = textureLoader.load('models/kaisa/textures/arcade/rose/kaisa.png')
            kaisaArcadeRoseTexture.flipY = false
            kaisaArcadeRoseTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadePistolsRoseTexture = textureLoader.load('models/kaisa/textures/arcade/rose/pistols.png')
            kaisaArcadePistolsRoseTexture.flipY = false
            kaisaArcadePistolsRoseTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadeShouldersRoseTexture = textureLoader.load('models/kaisa/textures/arcade/rose/shoulders.png')
            kaisaArcadeShouldersRoseTexture.flipY = false
            kaisaArcadeShouldersRoseTexture.encoding = THREE.sRGBEncoding

            const kaisaArcadeRubyTexture = textureLoader.load('models/kaisa/textures/arcade/ruby/kaisa.png')
            kaisaArcadeRubyTexture.flipY = false
            kaisaArcadeRubyTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadePistolsRubyTexture = textureLoader.load('models/kaisa/textures/arcade/ruby/pistols.png')
            kaisaArcadePistolsRubyTexture.flipY = false
            kaisaArcadePistolsRubyTexture.encoding = THREE.sRGBEncoding
            const kaisaArcadeShouldersRubyTexture = textureLoader.load('models/kaisa/textures/arcade/ruby/shoulders.png')
            kaisaArcadeShouldersRubyTexture.flipY = false
            kaisaArcadeShouldersRubyTexture.encoding = THREE.sRGBEncoding


            // material
            const kaisaArcadeMaterial = new THREE.MeshBasicMaterial({map: kaisaArcadeTexture})
            const kaisaArcadePistolsMaterial = new THREE.MeshBasicMaterial({map: kaisaArcadePistolsTexture})
            const kaisaArcadeShouldersMaterial = new THREE.MeshBasicMaterial({map: kaisaArcadeShouldersTexture})

            // load model
            gltfLoader.load(
                'models/kaisa/kaisa-arcade.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)

                    const kaisaArcadeMesh = gltf.scene.children[0].children.find(child => child.name === 'body')
                    kaisaArcadeMesh.material = kaisaArcadeMaterial 
                    const kaisaArcadeShouldersMesh = gltf.scene.children[0].children.find(child => child.name === 'shoulders')
                    kaisaArcadeShouldersMesh.material = kaisaArcadeShouldersMaterial 
                    const kaisaArcadeHelmetMesh = gltf.scene.children[0].children.find(child => child.name === 'helmet') 
                    kaisaArcadeHelmetMesh.material = kaisaArcadeMaterial 
                    const kaisaArcadePistolsMesh = gltf.scene.children[0].children.find(child => child.name === 'pistols')
                    kaisaArcadePistolsMesh.material = kaisaArcadePistolsMaterial 
    
                    kaisaHelmetSwitch.addEventListener('click', () => {
                        if(kaisaHelmetSwitch.checked) {
                            kaisaArcadeHelmetMesh.visible = true
                        } else {
                            kaisaArcadeHelmetMesh.visible = false
                        }                  
                    })
        
                    kaisaPistolsSwitch.addEventListener('click', () => {
                        if(kaisaPistolsSwitch.checked) {
                            kaisaArcadePistolsMesh.visible = true
                        } else {
                            kaisaArcadePistolsMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            kaisaChromas.style.display = 'block'
            kaisaChromas.appendChild(ruby)
            kaisaChromas.appendChild(catseye)
            kaisaChromas.appendChild(rose)
            kaisaChromas.appendChild(ko)
            kaisaChromas.appendChild(amethyst)
            kaisaChromas.appendChild(obsidian)
            kaisaChromas.appendChild(aquamarine)
            kaisaChromas.appendChild(emerald)

            // remove chromas
            granite.remove()
            pearl.remove()
            baddest.remove()
            citrine.remove()
            emberclaw.remove()
            sapphire.remove()
            tanzanite.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaKaisa.classList.add('active-chroma')

            noChromaKaisa.addEventListener('click', () => {
                kaisaArcadeMaterial.map = kaisaArcadeTexture
                kaisaArcadePistolsMaterial.map = kaisaArcadePistolsTexture
                kaisaArcadeShouldersMaterial.map = kaisaArcadeShouldersTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaKaisa.classList.add('active-chroma')
            })

            amethyst.addEventListener('click', () => {
                kaisaArcadeMaterial.map = kaisaArcadeAmethystTexture
                kaisaArcadePistolsMaterial.map = kaisaArcadePistolsAmethystTexture
                kaisaArcadeShouldersMaterial.map = kaisaArcadeShouldersAmethystTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                amethyst.classList.add('active-chroma')
            })

            aquamarine.addEventListener('click', () => {
                kaisaArcadeMaterial.map = kaisaArcadeAquamarineTexture
                kaisaArcadePistolsMaterial.map = kaisaArcadePistolsAquamarineTexture
                kaisaArcadeShouldersMaterial.map = kaisaArcadeShouldersAquamarineTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                aquamarine.classList.add('active-chroma')
            })

            catseye.addEventListener('click', () => {
                kaisaArcadeMaterial.map = kaisaArcadeCatseyeTexture
                kaisaArcadePistolsMaterial.map = kaisaArcadePistolsCatseyeTexture
                kaisaArcadeShouldersMaterial.map = kaisaArcadeShouldersCatseyeTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                catseye.classList.add('active-chroma')
            })

            emerald.addEventListener('click', () => {
                kaisaArcadeMaterial.map = kaisaArcadeEmeraldTexture
                kaisaArcadePistolsMaterial.map = kaisaArcadePistolsEmeraldTexture
                kaisaArcadeShouldersMaterial.map = kaisaArcadeShouldersEmeraldTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emerald.classList.add('active-chroma')
            })

            obsidian.addEventListener('click', () => {
                kaisaArcadeMaterial.map = kaisaArcadeObsidianTexture
                kaisaArcadePistolsMaterial.map = kaisaArcadePistolsObsidianTexture
                kaisaArcadeShouldersMaterial.map = kaisaArcadeShouldersObsidianTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })

            ko.addEventListener('click', () => {
                kaisaArcadeMaterial.map = kaisaArcadeKOTexture
                kaisaArcadePistolsMaterial.map = kaisaArcadePistolsKOTexture
                kaisaArcadeShouldersMaterial.map = kaisaArcadeShouldersKOTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ko.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                kaisaArcadeMaterial.map = kaisaArcadeRoseTexture
                kaisaArcadePistolsMaterial.map = kaisaArcadePistolsRoseTexture
                kaisaArcadeShouldersMaterial.map = kaisaArcadeShouldersRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                kaisaArcadeMaterial.map = kaisaArcadeRubyTexture
                kaisaArcadePistolsMaterial.map = kaisaArcadePistolsRubyTexture
                kaisaArcadeShouldersMaterial.map = kaisaArcadeShouldersRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })
        })

        // KAISA KDA ALL OUT
        kaisaKDAAllOut.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let kaisaSkin of skins) {kaisaSkin.classList.remove('skin-active')}
            kaisaKDAAllOut.classList.add('skin-active')
            kaisaKDAAllOut.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            kaisaCheckboxes.style.display = 'block'
            kaisaCheckboxes.appendChild(kaisaHelmetSwitch)
            kaisaCheckboxes.appendChild(kaisaHelmetLabel)
            kaisaHelmetLabel.innerHTML = 'Glasses'
            kaisaHelmetSwitch.checked = true
            
            kaisaCheckboxes.appendChild(kaisaPistolsSwitch)
            kaisaCheckboxes.appendChild(kaisaPistolsLabel)
            kaisaPistolsLabel.innerHTML = 'Pistols'
            kaisaPistolsSwitch.checked = true

            // textures
            const kaisaKDAAllOutTexture = textureLoader.load('models/kaisa/textures/kda-all-out/kaisa.png')
            kaisaKDAAllOutTexture.flipY = false
            kaisaKDAAllOutTexture.encoding = THREE.sRGBEncoding
            const kaisaKDAAllOutPistolsTexture = textureLoader.load('models/kaisa/textures/kda-all-out/pistols.png')
            kaisaKDAAllOutPistolsTexture.flipY = false
            kaisaKDAAllOutPistolsTexture.encoding = THREE.sRGBEncoding

            const kaisaKDAAllOutBaddestTexture = textureLoader.load('models/kaisa/textures/kda-all-out/baddest/kaisa.png')
            kaisaKDAAllOutBaddestTexture.flipY = false
            kaisaKDAAllOutBaddestTexture.encoding = THREE.sRGBEncoding
            const kaisaKDAAllOutPistolsBaddestTexture = textureLoader.load('models/kaisa/textures/kda-all-out/baddest/pistols.png')
            kaisaKDAAllOutPistolsBaddestTexture.flipY = false
            kaisaKDAAllOutPistolsBaddestTexture.encoding = THREE.sRGBEncoding

            // material
            const kaisaKDAAllOutMaterial = new THREE.MeshBasicMaterial({map: kaisaKDAAllOutTexture})
            const kaisaKDAAllOutPistolsMaterial = new THREE.MeshBasicMaterial({map: kaisaKDAAllOutPistolsTexture})

            // load model
            gltfLoader.load(
                'models/kaisa/kaisa-kda-all-out.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)

                    const kaisaKDAAllOutMesh = gltf.scene.children[0].children.find(child => child.name === 'body')
                    kaisaKDAAllOutMesh.material = kaisaKDAAllOutMaterial 
                    const kaisaKDAAllOutGlassesMesh = gltf.scene.children[0].children.find(child => child.name === 'glasses') 
                    kaisaKDAAllOutGlassesMesh.material = kaisaKDAAllOutMaterial 
                    const kaisaKDAAllOutPistolsMesh = gltf.scene.children[0].children.find(child => child.name === 'pistols')
                    kaisaKDAAllOutPistolsMesh.material = kaisaKDAAllOutPistolsMaterial 
    
                    kaisaHelmetSwitch.addEventListener('click', () => {
                        if(kaisaHelmetSwitch.checked) {
                            kaisaKDAAllOutGlassesMesh.visible = true
                        } else {
                            kaisaKDAAllOutGlassesMesh.visible = false
                        }                  
                    })
        
                    kaisaPistolsSwitch.addEventListener('click', () => {
                        if(kaisaPistolsSwitch.checked) {
                            kaisaKDAAllOutPistolsMesh.visible = true
                        } else {
                            kaisaKDAAllOutPistolsMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            kaisaChromas.style.display = 'block'
            kaisaChromas.appendChild(baddest)

            // remove chromas
            emerald.remove()
            ko.remove()
            ruby.remove()
            catseye.remove()
            rose.remove()
            amethyst.remove()
            pearl.remove()
            obsidian.remove()
            aquamarine.remove()
            granite.remove()
            citrine.remove()
            emberclaw.remove()
            sapphire.remove()
            tanzanite.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaKaisa.classList.add('active-chroma')

            noChromaKaisa.addEventListener('click', () => {
                kaisaKDAAllOutMaterial.map = kaisaKDAAllOutTexture
                kaisaKDAAllOutPistolsMaterial.map = kaisaKDAAllOutPistolsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaKaisa.classList.add('active-chroma')
            })

            baddest.addEventListener('click', () => {
                kaisaKDAAllOutMaterial.map = kaisaKDAAllOutBaddestTexture
                kaisaKDAAllOutPistolsMaterial.map = kaisaKDAAllOutPistolsBaddestTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                baddest.classList.add('active-chroma')
            })
        })

        // KAISA KDA ALL OUT PRESTIGE
        kaisaKDAAllOutPrestige.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let kaisaSkin of skins) {kaisaSkin.classList.remove('skin-active')}
            kaisaKDAAllOutPrestige.classList.add('skin-active')
            kaisaKDAAllOutPrestige.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            kaisaCheckboxes.style.display = 'block'
            kaisaCheckboxes.appendChild(kaisaHelmetSwitch)
            kaisaCheckboxes.appendChild(kaisaHelmetLabel)
            kaisaHelmetLabel.innerHTML = 'Glasses'
            kaisaHelmetSwitch.checked = true

            kaisaCheckboxes.appendChild(kaisaPistolsSwitch)
            kaisaCheckboxes.appendChild(kaisaPistolsLabel)
            kaisaPistolsLabel.innerHTML = 'Pistols'
            kaisaPistolsSwitch.checked = true

            // load model
            gltfLoader.load(
                'models/kaisa/kaisa-kda-all-out-prestige.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)

                    const kaisaGlassesMesh = gltf.scene.children[0].children.find(child => child.name === 'glasses') 
                    const kaisaPistolsMesh = gltf.scene.children[0].children.find(child => child.name === 'pistols')
    
                    kaisaHelmetSwitch.addEventListener('click', () => {
                        if(kaisaHelmetSwitch.checked) {
                            kaisaGlassesMesh.visible = true
                        } else {
                            kaisaGlassesMesh.visible = false
                        }                  
                    })
        
                    kaisaPistolsSwitch.addEventListener('click', () => {
                        if(kaisaPistolsSwitch.checked) {
                            kaisaPistolsMesh.visible = true
                        } else {
                            kaisaPistolsMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            kaisaChromas.style.display = 'none'
        })

        // KAISA LAGOON DRAGON
        kaisaLagoonDragon.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let kaisaSkin of skins) {kaisaSkin.classList.remove('skin-active')}
            kaisaLagoonDragon.classList.add('skin-active')
            kaisaLagoonDragon.scrollIntoView({ behavior: 'smooth', })

            // checkbox
            kaisaCheckboxes.style.display = 'block'
            kaisaCheckboxes.appendChild(kaisaHelmetSwitch)
            kaisaCheckboxes.appendChild(kaisaHelmetLabel)
            kaisaHelmetLabel.innerHTML = 'Helmet'
            kaisaHelmetSwitch.checked = true
            
            kaisaCheckboxes.appendChild(kaisaPistolsSwitch)
            kaisaCheckboxes.appendChild(kaisaPistolsLabel)
            kaisaPistolsLabel.innerHTML = 'Pistols'
            kaisaPistolsSwitch.checked = true

            // textures
            const kaisaLagoonDragonTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/kaisa.png')
            kaisaLagoonDragonTexture.flipY = false
            kaisaLagoonDragonTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonPistolsTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/pistols.png')
            kaisaLagoonDragonPistolsTexture.flipY = false
            kaisaLagoonDragonPistolsTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonDragonsTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/dragons.png')
            kaisaLagoonDragonDragonsTexture.flipY = false
            kaisaLagoonDragonDragonsTexture.encoding = THREE.sRGBEncoding

            const kaisaLagoonDragonEmeraldTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/emerald/kaisa.png')
            kaisaLagoonDragonEmeraldTexture.flipY = false
            kaisaLagoonDragonEmeraldTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonPistolsEmeraldTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/emerald/pistols.png')
            kaisaLagoonDragonPistolsEmeraldTexture.flipY = false
            kaisaLagoonDragonPistolsEmeraldTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonDragonsEmeraldTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/emerald/dragons.png')
            kaisaLagoonDragonDragonsEmeraldTexture.flipY = false
            kaisaLagoonDragonDragonsEmeraldTexture.encoding = THREE.sRGBEncoding

            const kaisaLagoonDragonObsidianTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/obsidian/kaisa.png')
            kaisaLagoonDragonObsidianTexture.flipY = false
            kaisaLagoonDragonObsidianTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonPistolsObsidianTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/obsidian/pistols.png')
            kaisaLagoonDragonPistolsObsidianTexture.flipY = false
            kaisaLagoonDragonPistolsObsidianTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonDragonsObsidianTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/obsidian/dragons.png')
            kaisaLagoonDragonDragonsObsidianTexture.flipY = false
            kaisaLagoonDragonDragonsObsidianTexture.encoding = THREE.sRGBEncoding

            const kaisaLagoonDragonRoseTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/rose/kaisa.png')
            kaisaLagoonDragonRoseTexture.flipY = false
            kaisaLagoonDragonRoseTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonPistolsRoseTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/rose/pistols.png')
            kaisaLagoonDragonPistolsRoseTexture.flipY = false
            kaisaLagoonDragonPistolsRoseTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonDragonsRoseTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/rose/dragons.png')
            kaisaLagoonDragonDragonsRoseTexture.flipY = false
            kaisaLagoonDragonDragonsRoseTexture.encoding = THREE.sRGBEncoding

            const kaisaLagoonDragonRubyTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/ruby/kaisa.png')
            kaisaLagoonDragonRubyTexture.flipY = false
            kaisaLagoonDragonRubyTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonPistolsRubyTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/ruby/pistols.png')
            kaisaLagoonDragonPistolsRubyTexture.flipY = false
            kaisaLagoonDragonPistolsRubyTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonDragonsRubyTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/ruby/dragons.png')
            kaisaLagoonDragonDragonsRubyTexture.flipY = false
            kaisaLagoonDragonDragonsRubyTexture.encoding = THREE.sRGBEncoding

            const kaisaLagoonDragonCitrineTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/citrine/kaisa.png')
            kaisaLagoonDragonCitrineTexture.flipY = false
            kaisaLagoonDragonCitrineTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonPistolsCitrineTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/citrine/pistols.png')
            kaisaLagoonDragonPistolsCitrineTexture.flipY = false
            kaisaLagoonDragonPistolsCitrineTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonDragonsCitrineTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/citrine/dragons.png')
            kaisaLagoonDragonDragonsCitrineTexture.flipY = false
            kaisaLagoonDragonDragonsCitrineTexture.encoding = THREE.sRGBEncoding

            const kaisaLagoonDragonEmberclawTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/emberclaw/kaisa.png')
            kaisaLagoonDragonEmberclawTexture.flipY = false
            kaisaLagoonDragonEmberclawTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonPistolsEmberclawTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/emberclaw/pistols.png')
            kaisaLagoonDragonPistolsEmberclawTexture.flipY = false
            kaisaLagoonDragonPistolsEmberclawTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonDragonsEmberclawTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/emberclaw/dragons.png')
            kaisaLagoonDragonDragonsEmberclawTexture.flipY = false
            kaisaLagoonDragonDragonsEmberclawTexture.encoding = THREE.sRGBEncoding

            const kaisaLagoonDragonSapphireTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/sapphire/kaisa.png')
            kaisaLagoonDragonSapphireTexture.flipY = false
            kaisaLagoonDragonSapphireTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonPistolsSapphireTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/sapphire/pistols.png')
            kaisaLagoonDragonPistolsSapphireTexture.flipY = false
            kaisaLagoonDragonPistolsSapphireTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonDragonsSapphireTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/sapphire/dragons.png')
            kaisaLagoonDragonDragonsSapphireTexture.flipY = false
            kaisaLagoonDragonDragonsSapphireTexture.encoding = THREE.sRGBEncoding

            const kaisaLagoonDragonTanzaniteTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/tanzanite/kaisa.png')
            kaisaLagoonDragonTanzaniteTexture.flipY = false
            kaisaLagoonDragonTanzaniteTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonPistolsTanzaniteTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/tanzanite/pistols.png')
            kaisaLagoonDragonPistolsTanzaniteTexture.flipY = false
            kaisaLagoonDragonPistolsTanzaniteTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonDragonsTanzaniteTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/tanzanite/dragons.png')
            kaisaLagoonDragonDragonsTanzaniteTexture.flipY = false
            kaisaLagoonDragonDragonsTanzaniteTexture.encoding = THREE.sRGBEncoding

            const kaisaLagoonDragonPearlTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/pearl/kaisa.png')
            kaisaLagoonDragonPearlTexture.flipY = false
            kaisaLagoonDragonPearlTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonPistolsPearlTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/pearl/pistols.png')
            kaisaLagoonDragonPistolsPearlTexture.flipY = false
            kaisaLagoonDragonPistolsPearlTexture.encoding = THREE.sRGBEncoding
            const kaisaLagoonDragonDragonsPearlTexture = textureLoader.load('models/kaisa/textures/lagoon-dragon/pearl/dragons.png')
            kaisaLagoonDragonDragonsPearlTexture.flipY = false
            kaisaLagoonDragonDragonsPearlTexture.encoding = THREE.sRGBEncoding


            // material
            const kaisaLagoonDragonMaterial = new THREE.MeshBasicMaterial({map: kaisaLagoonDragonTexture})
            const kaisaLagoonDragonPistolsMaterial = new THREE.MeshBasicMaterial({map: kaisaLagoonDragonPistolsTexture})
            const kaisaLagoonDragonDragonsMaterial = new THREE.MeshBasicMaterial({map: kaisaLagoonDragonDragonsTexture})

            // load model
            gltfLoader.load(
                'models/kaisa/kaisa-lagoon-dragon.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)

                    const kaisaLagoonDragonMesh = gltf.scene.children[0].children.find(child => child.name === 'body')
                    kaisaLagoonDragonMesh.material = kaisaLagoonDragonMaterial 
                    const kaisaLagoonDragonDragonsMesh = gltf.scene.children[0].children.find(child => child.name === 'dragons')
                    kaisaLagoonDragonDragonsMesh.material = kaisaLagoonDragonDragonsMaterial 
                    const kaisaLagoonDragonHelmetMesh = gltf.scene.children[0].children.find(child => child.name === 'helmet') 
                    kaisaLagoonDragonHelmetMesh.material = kaisaLagoonDragonMaterial 
                    const kaisaLagoonDragonPistolsMesh = gltf.scene.children[0].children.find(child => child.name === 'pistols')
                    kaisaLagoonDragonPistolsMesh.material = kaisaLagoonDragonPistolsMaterial 
    
                    kaisaHelmetSwitch.addEventListener('click', () => {
                        if(kaisaHelmetSwitch.checked) {
                            kaisaLagoonDragonHelmetMesh.visible = true
                        } else {
                            kaisaLagoonDragonHelmetMesh.visible = false
                        }                  
                    })
        
                    kaisaPistolsSwitch.addEventListener('click', () => {
                        if(kaisaPistolsSwitch.checked) {
                            kaisaLagoonDragonPistolsMesh.visible = true
                        } else {
                            kaisaLagoonDragonPistolsMesh.visible = false
                        }                  
                    })

                    scene.add(gltf.scene)
                }
            )

            // chromas
            kaisaChromas.style.display = 'block'
            kaisaChromas.appendChild(ruby)
            kaisaChromas.appendChild(emberclaw)
            kaisaChromas.appendChild(citrine)
            kaisaChromas.appendChild(rose)
            kaisaChromas.appendChild(pearl)
            kaisaChromas.appendChild(tanzanite)
            kaisaChromas.appendChild(sapphire)
            kaisaChromas.appendChild(obsidian)
            kaisaChromas.appendChild(emerald)

            // remove chromas
            granite.remove()
            baddest.remove()
            catseye.remove()
            amethyst.remove()
            ko.remove()
            aquamarine.remove()

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaKaisa.classList.add('active-chroma')

            noChromaKaisa.addEventListener('click', () => {
                kaisaLagoonDragonMaterial.map = kaisaLagoonDragonTexture
                kaisaLagoonDragonPistolsMaterial.map = kaisaLagoonDragonPistolsTexture
                kaisaLagoonDragonDragonsMaterial.map = kaisaLagoonDragonDragonsTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaKaisa.classList.add('active-chroma')
            })

            citrine.addEventListener('click', () => {
                kaisaLagoonDragonMaterial.map = kaisaLagoonDragonCitrineTexture
                kaisaLagoonDragonPistolsMaterial.map = kaisaLagoonDragonPistolsCitrineTexture
                kaisaLagoonDragonDragonsMaterial.map = kaisaLagoonDragonDragonsCitrineTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                citrine.classList.add('active-chroma')
            })

            emberclaw.addEventListener('click', () => {
                kaisaLagoonDragonMaterial.map = kaisaLagoonDragonEmberclawTexture
                kaisaLagoonDragonPistolsMaterial.map = kaisaLagoonDragonPistolsEmberclawTexture
                kaisaLagoonDragonDragonsMaterial.map = kaisaLagoonDragonDragonsEmberclawTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emberclaw.classList.add('active-chroma')
            })

            sapphire.addEventListener('click', () => {
                kaisaLagoonDragonMaterial.map = kaisaLagoonDragonSapphireTexture
                kaisaLagoonDragonPistolsMaterial.map = kaisaLagoonDragonPistolsSapphireTexture
                kaisaLagoonDragonDragonsMaterial.map = kaisaLagoonDragonDragonsSapphireTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                sapphire.classList.add('active-chroma')
            })

            emerald.addEventListener('click', () => {
                kaisaLagoonDragonMaterial.map = kaisaLagoonDragonEmeraldTexture
                kaisaLagoonDragonPistolsMaterial.map = kaisaLagoonDragonPistolsEmeraldTexture
                kaisaLagoonDragonDragonsMaterial.map = kaisaLagoonDragonDragonsEmeraldTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emerald.classList.add('active-chroma')
            })

            obsidian.addEventListener('click', () => {
                kaisaLagoonDragonMaterial.map = kaisaLagoonDragonObsidianTexture
                kaisaLagoonDragonPistolsMaterial.map = kaisaLagoonDragonPistolsObsidianTexture
                kaisaLagoonDragonDragonsMaterial.map = kaisaLagoonDragonDragonsObsidianTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })

            tanzanite.addEventListener('click', () => {
                kaisaLagoonDragonMaterial.map = kaisaLagoonDragonTanzaniteTexture
                kaisaLagoonDragonPistolsMaterial.map = kaisaLagoonDragonPistolsTanzaniteTexture
                kaisaLagoonDragonDragonsMaterial.map = kaisaLagoonDragonDragonsTanzaniteTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                tanzanite.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                kaisaLagoonDragonMaterial.map = kaisaLagoonDragonRoseTexture
                kaisaLagoonDragonPistolsMaterial.map = kaisaLagoonDragonPistolsRoseTexture
                kaisaLagoonDragonDragonsMaterial.map = kaisaLagoonDragonDragonsRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                kaisaLagoonDragonMaterial.map = kaisaLagoonDragonRubyTexture
                kaisaLagoonDragonPistolsMaterial.map = kaisaLagoonDragonPistolsRubyTexture
                kaisaLagoonDragonDragonsMaterial.map = kaisaLagoonDragonDragonsRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                kaisaLagoonDragonMaterial.map = kaisaLagoonDragonPearlTexture
                kaisaLagoonDragonPistolsMaterial.map = kaisaLagoonDragonPistolsPearlTexture
                kaisaLagoonDragonDragonsMaterial.map = kaisaLagoonDragonDragonsPearlTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })
        })
    })
    })

    // SERAPHINE
    seraphineSelectors.forEach(seraphineSelector => {seraphineSelector.addEventListener('click', () => {
        scene.remove(scene.children[1])
        canvas.style.pointerEvents = "all"
        ahriPage.style.opacity = '0'
        ahriPage.style.pointerEvents = 'none'
        akaliPage.style.opacity = '0'
        akaliPage.style.pointerEvents = 'none'
        evelynnPage.style.opacity = '0'
        evelynnPage.style.pointerEvents = 'none'
        kaisaPage.style.opacity = '0'
        kaisaPage.style.pointerEvents = 'none'
        
        // page setup
        seraphinePage.style.opacity = '1'
        seraphinePage.style.pointerEvents = 'all'
        root.style.setProperty('--primary', "#EE72BA")
        root.style.setProperty('--secondary', "#5192E4")
        root.style.setProperty('--background', "#1E1126")
        seraphineChromas.style.display = 'none'

        // skin selection
        for(let seraphineSkin of skins) {seraphineSkin.classList.remove('skin-active')}
        seraphineBase.classList.add('skin-active')
        seraphineBase.scrollIntoView({ behavior: 'smooth', })

        // load model
        gltfLoader.load(
            'models/seraphine/seraphine-base.glb',
            (gltf) => {
                scene.remove(scene.children[1])
                gltf.scene.scale.set(0.015, 0.015, 0.015)
                gltf.scene.position.set(0, -1.3, 0)
                scene.add(gltf.scene)
            }
        )

        // SERAPHINE BASE
        seraphineBase.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let seraphineSkin of skins) {seraphineSkin.classList.remove('skin-active')}
            seraphineBase.classList.add('skin-active')
            seraphineBase.scrollIntoView({ behavior: 'smooth', })

            // load model
            gltfLoader.load(
                'models/seraphine/seraphine-base.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.2, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            seraphineChromas.style.display = 'none'
        })

        // SERAPHINE KDA ALL OUT INDIE
        seraphineKDAAllOutIndie.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let seraphineSkin of skins) {seraphineSkin.classList.remove('skin-active')}
            seraphineKDAAllOutIndie.classList.add('skin-active')
            seraphineKDAAllOutIndie.scrollIntoView({ behavior: 'smooth', })

            // load model
            gltfLoader.load(
                'models/seraphine/seraphine-kda-all-out-indie.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            seraphineChromas.style.display = 'none'
        })

        // SERAPHINE KDA ALL OUT RISING STAR
        seraphineKDAAllOutRisingStar.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let seraphineSkin of skins) {seraphineSkin.classList.remove('skin-active')}
            seraphineKDAAllOutRisingStar.classList.add('skin-active')
            seraphineKDAAllOutRisingStar.scrollIntoView({ behavior: 'smooth', })

            // load model
            gltfLoader.load(
                'models/seraphine/seraphine-kda-all-out-rising-star.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            seraphineChromas.style.display = 'none'
        })

        // SERAPHINE KDA ALL OUT SUPERSTAR
        seraphineKDAAllOut.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let seraphineSkin of skins) {seraphineSkin.classList.remove('skin-active')}
            seraphineKDAAllOut.classList.add('skin-active')
            seraphineKDAAllOut.scrollIntoView({ behavior: 'smooth', })

            // load model
            gltfLoader.load(
                'models/seraphine/seraphine-kda-all-out-superstar.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)
                    scene.add(gltf.scene)
                }
            )

            // chromas
            seraphineChromas.style.display = 'none'
        })

        // SERAPHINE GRACEFUL PHOENIX
        seraphineGracefulPhoenix.addEventListener('click', () => {
            // page setup
            scene.remove(scene.children[1])

            // skin selection
            for(let seraphineSkin of skins) {seraphineSkin.classList.remove('skin-active')}
            seraphineGracefulPhoenix.classList.add('skin-active')
            seraphineGracefulPhoenix.scrollIntoView({ behavior: 'smooth', })

            // textures
            const seraphineGracefulPhoenixTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/seraphine.png')
            seraphineGracefulPhoenixTexture.flipY = false
            seraphineGracefulPhoenixTexture.encoding = THREE.sRGBEncoding
            const seraphineGracefulPhoenixHairTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/hair.png')
            seraphineGracefulPhoenixHairTexture.flipY = false
            seraphineGracefulPhoenixHairTexture.encoding = THREE.sRGBEncoding

            const seraphineGracefulPhoenixEmeraldTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/emerald/seraphine.png')
            seraphineGracefulPhoenixEmeraldTexture.flipY = false
            seraphineGracefulPhoenixEmeraldTexture.encoding = THREE.sRGBEncoding
            const seraphineGracefulPhoenixHairEmeraldTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/emerald/hair.png')
            seraphineGracefulPhoenixHairEmeraldTexture.flipY = false
            seraphineGracefulPhoenixHairEmeraldTexture.encoding = THREE.sRGBEncoding

            const seraphineGracefulPhoenixObsidianTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/obsidian/seraphine.png')
            seraphineGracefulPhoenixObsidianTexture.flipY = false
            seraphineGracefulPhoenixObsidianTexture.encoding = THREE.sRGBEncoding
            const seraphineGracefulPhoenixHairObsidianTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/obsidian/hair.png')
            seraphineGracefulPhoenixHairObsidianTexture.flipY = false
            seraphineGracefulPhoenixHairObsidianTexture.encoding = THREE.sRGBEncoding

            const seraphineGracefulPhoenixPearlTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/pearl/seraphine.png')
            seraphineGracefulPhoenixPearlTexture.flipY = false
            seraphineGracefulPhoenixPearlTexture.encoding = THREE.sRGBEncoding
            const seraphineGracefulPhoenixHairPearlTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/pearl/hair.png')
            seraphineGracefulPhoenixHairPearlTexture.flipY = false
            seraphineGracefulPhoenixHairPearlTexture.encoding = THREE.sRGBEncoding

            const seraphineGracefulPhoenixRoseTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/rose/seraphine.png')
            seraphineGracefulPhoenixRoseTexture.flipY = false
            seraphineGracefulPhoenixRoseTexture.encoding = THREE.sRGBEncoding
            const seraphineGracefulPhoenixHairRoseTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/rose/hair.png')
            seraphineGracefulPhoenixHairRoseTexture.flipY = false
            seraphineGracefulPhoenixHairRoseTexture.encoding = THREE.sRGBEncoding

            const seraphineGracefulPhoenixRubyTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/ruby/seraphine.png')
            seraphineGracefulPhoenixRubyTexture.flipY = false
            seraphineGracefulPhoenixRubyTexture.encoding = THREE.sRGBEncoding
            const seraphineGracefulPhoenixHairRubyTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/ruby/hair.png')
            seraphineGracefulPhoenixHairRubyTexture.flipY = false
            seraphineGracefulPhoenixHairRubyTexture.encoding = THREE.sRGBEncoding

            const seraphineGracefulPhoenixSapphireTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/sapphire/seraphine.png')
            seraphineGracefulPhoenixSapphireTexture.flipY = false
            seraphineGracefulPhoenixSapphireTexture.encoding = THREE.sRGBEncoding
            const seraphineGracefulPhoenixHairSapphireTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/sapphire/hair.png')
            seraphineGracefulPhoenixHairSapphireTexture.flipY = false
            seraphineGracefulPhoenixHairSapphireTexture.encoding = THREE.sRGBEncoding

            const seraphineGracefulPhoenixTanzaniteTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/tanzanite/seraphine.png')
            seraphineGracefulPhoenixTanzaniteTexture.flipY = false
            seraphineGracefulPhoenixTanzaniteTexture.encoding = THREE.sRGBEncoding
            const seraphineGracefulPhoenixHairTanzaniteTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/tanzanite/hair.png')
            seraphineGracefulPhoenixHairTanzaniteTexture.flipY = false
            seraphineGracefulPhoenixHairTanzaniteTexture.encoding = THREE.sRGBEncoding

            const seraphineGracefulPhoenixTurquoiseTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/turquoise/seraphine.png')
            seraphineGracefulPhoenixTurquoiseTexture.flipY = false
            seraphineGracefulPhoenixTurquoiseTexture.encoding = THREE.sRGBEncoding
            const seraphineGracefulPhoenixHairTurquoiseTexture = textureLoader.load('models/seraphine/textures/graceful-phoenix/turquoise/hair.png')
            seraphineGracefulPhoenixHairTurquoiseTexture.flipY = false
            seraphineGracefulPhoenixHairTurquoiseTexture.encoding = THREE.sRGBEncoding

            // material
            const seraphineGracefulPhoenixMaterial = new THREE.MeshBasicMaterial({map: seraphineGracefulPhoenixTexture})
            const seraphineGracefulPhoenixHairMaterial = new THREE.MeshBasicMaterial({map: seraphineGracefulPhoenixHairTexture})

            // load model
            gltfLoader.load(
                'models/seraphine/seraphine-graceful-phoenix.glb',
                (gltf) => {
                    scene.remove(scene.children[1])
                    gltf.scene.scale.set(0.015, 0.015, 0.015)
                    gltf.scene.position.set(0, -1.3, 0)

                    const seraphineGracefulPhoenixMesh = gltf.scene.children[0].children.find(child => child.name === 'body')
                    seraphineGracefulPhoenixMesh.material = seraphineGracefulPhoenixMaterial 
                    const seraphineGracefulPhoenixHairMesh = gltf.scene.children[0].children.find(child => child.name === 'hair')
                    seraphineGracefulPhoenixHairMesh.material = seraphineGracefulPhoenixHairMaterial 

                    scene.add(gltf.scene)
                }
            )

            // chromas
            seraphineChromas.style.display = 'block'
            seraphineChromas.appendChild(ruby)
            seraphineChromas.appendChild(rose)
            seraphineChromas.appendChild(pearl)
            seraphineChromas.appendChild(tanzanite)
            seraphineChromas.appendChild(obsidian)
            seraphineChromas.appendChild(sapphire)
            seraphineChromas.appendChild(turquoise)
            seraphineChromas.appendChild(emerald)

            // recall chromas
            activeChromas = document.querySelectorAll('.chroma')

            for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
            noChromaSeraphine.classList.add('active-chroma')

            noChromaSeraphine.addEventListener('click', () => {
                seraphineGracefulPhoenixMaterial.map = seraphineGracefulPhoenixTexture
                seraphineGracefulPhoenixHairMaterial.map = seraphineGracefulPhoenixHairTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                noChromaSeraphine.classList.add('active-chroma')
            })

            emerald.addEventListener('click', () => {
                seraphineGracefulPhoenixMaterial.map = seraphineGracefulPhoenixEmeraldTexture
                seraphineGracefulPhoenixHairMaterial.map = seraphineGracefulPhoenixHairEmeraldTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                emerald.classList.add('active-chroma')
            })

            obsidian.addEventListener('click', () => {
                seraphineGracefulPhoenixMaterial.map = seraphineGracefulPhoenixObsidianTexture
                seraphineGracefulPhoenixHairMaterial.map = seraphineGracefulPhoenixHairObsidianTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                obsidian.classList.add('active-chroma')
            })

            pearl.addEventListener('click', () => {
                seraphineGracefulPhoenixMaterial.map = seraphineGracefulPhoenixPearlTexture
                seraphineGracefulPhoenixHairMaterial.map = seraphineGracefulPhoenixHairPearlTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                pearl.classList.add('active-chroma')
            })

            rose.addEventListener('click', () => {
                seraphineGracefulPhoenixMaterial.map = seraphineGracefulPhoenixRoseTexture
                seraphineGracefulPhoenixHairMaterial.map = seraphineGracefulPhoenixHairRoseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                rose.classList.add('active-chroma')
            })

            ruby.addEventListener('click', () => {
                seraphineGracefulPhoenixMaterial.map = seraphineGracefulPhoenixRubyTexture
                seraphineGracefulPhoenixHairMaterial.map = seraphineGracefulPhoenixHairRubyTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                ruby.classList.add('active-chroma')
            })

            sapphire.addEventListener('click', () => {
                seraphineGracefulPhoenixMaterial.map = seraphineGracefulPhoenixSapphireTexture
                seraphineGracefulPhoenixHairMaterial.map = seraphineGracefulPhoenixHairSapphireTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                sapphire.classList.add('active-chroma')
            })

            tanzanite.addEventListener('click', () => {
                seraphineGracefulPhoenixMaterial.map = seraphineGracefulPhoenixTanzaniteTexture
                seraphineGracefulPhoenixHairMaterial.map = seraphineGracefulPhoenixHairTanzaniteTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                tanzanite.classList.add('active-chroma')
            })

            turquoise.addEventListener('click', () => {
                seraphineGracefulPhoenixMaterial.map = seraphineGracefulPhoenixTurquoiseTexture
                seraphineGracefulPhoenixHairMaterial.map = seraphineGracefulPhoenixHairTurquoiseTexture
                for(let activeChroma of activeChromas) {activeChroma.classList.remove('active-chroma')}
                turquoise.classList.add('active-chroma')
            })
        })

        
    })
    })

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.setClearColor( 0xffffff, 0);


    const clock = new THREE.Clock()
    let previousTime = 0

    const loop = () =>
    {
        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - previousTime
        previousTime = elapsedTime

        // Update controls
        controls.update()

        // // Update mixer
        // if(mixer)
        // {
        //     mixer.update(deltaTime)
        // }


        // Render
        renderer.render(scene, camera)

        // Keep looping
        window.requestAnimationFrame(loop)
    }
    loop()

})
