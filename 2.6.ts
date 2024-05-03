{
    // Constraints In Typescript
    const addCourchToStudent =< T extends { id: number;  name: string; email: string;}> (student : T) => {
        const course = " Next lavel Web development"

        return {
            ...student, course
        }
    }
}