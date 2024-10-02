function rectangleArea(width, height) {
    if (width <= 0 || height <= 0) {
        return 0;
    }
    return width * height;
}
test('Normal recangle area, width > 0 and height > 0', () => {
    const rect1 = rectangleArea(8,5);
    expect(rect1).toBe(40);
});

test('Zero recangle area, width <= 0 and height <= 0', () => {
    const rect1 = rectangleArea(-4, 6);
    expect(rect1).toBe(0);

    const rect2 = rectangleArea(4, -6);
    expect(rect2).toBe(0);

    const rect3 = rectangleArea(-4, -6);
    expect(rect3).toBe(0);
});