import { mount } from '@vue/test-utils'
import { useWindowSize, BREAK_POINT } from './usdWindowSize'

enum SizeType {
    width = 'width',
    height = 'height'
}

const resize = {
    [SizeType.height](size: number) {
        ;window.innerWidth = size
    },
    [SizeType.width](size: number) {
        ;window.innerHeight = size
    }
}

const triggerResize = (type: SizeType, size = 0) => {
    resize[type](size);
    window.dispatchEvent(new Event('resize'))
}


describe(`useWindowSize`, () => {

    it('should be defined', () => {
        expect(useWindowSize).toBeDefined()
    })

    it('should detect if mobile', () => {
        const { windowSize, isMobile} = useWindowSize()
        const _isMobile = windowSize.value.width < BREAK_POINT
        expect(isMobile.value).toBe(_isMobile)
    })

})