/* eslint-disable no-param-reassign */
export default function (element, binding) {
    Object.keys(binding.value).forEach((attribute) => {
        element.style[attribute] = binding.value[attribute];
    });
    element.style.position = 'absolute';
}
