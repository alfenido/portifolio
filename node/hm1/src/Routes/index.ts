import {Router, Request, Response} from 'express';

const router = Router();

router.get('/',(req: Request, res: Response) => {
    res.send('Olá Mundo');
})

router.get('/contato',(req: Request, res: Response) => {
    res.send('Pagina de Contato');
})

router.get('/sobre',(req: Request, res: Response) => {
    res.send('About Us');
})

export default router;