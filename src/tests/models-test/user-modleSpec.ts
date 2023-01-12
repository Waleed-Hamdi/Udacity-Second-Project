
import { user, usermodel } from "../../models/userModel";


const store = new usermodel();
const us: user = {
    id: 0,
    firstName: "waleed",
    lastName: "hamdi",
    password: "waleedhamdi19598"
}




describe('Test user modle  methods', () => {
    it('test create method', async () => {
        const response = await store.create(us);
        expect(response).not.toBeNull();
    }),

        it('test index method', async () => {
            const response = await store.index();
            expect(response).not.toBeNull();
        }),
        
        it('test create method', async () => {
            const response = await store.show(1);
            expect(response).not.toBeNull();
        })

       
});
