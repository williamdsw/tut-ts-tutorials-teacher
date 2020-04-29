
class Circle {
    public static pi = 3.14;

    public static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }

    public calculateCircumference(radius: number) {
        return 2 * Circle.pi * radius;
    }
}