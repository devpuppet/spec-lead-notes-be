import { json } from 'body-parser';
import express from 'express';

import { LoginRoutes } from './routes/login.routes';
import { UserService } from './services/user.service';
import { MockUserRepository } from './repositories/user/user-mock.repository';
import { LoginController } from './controllers/login';
import cors from 'cors';
import { UnitsRoutes } from './routes/units.routes';
import { UnitsController } from './controllers/units';
import { UnitsService } from './services/units.service';
import { UnitsMockRepository } from './repositories/units/units-mock.repository';

const app = express();
const PORT = 3000;

app.use(json());
app.use(cors());

const unitsReposiory = new UnitsMockRepository();
const unitsService = new UnitsService(unitsReposiory);
const unitsController = new UnitsController(unitsService);
const unitsRoutes = new UnitsRoutes(unitsController);
app.use('/', unitsRoutes.router);

const userRepository = new MockUserRepository();
const userService = new UserService(userRepository);
const loginController = new LoginController(userService);
const loginRoutes = new LoginRoutes(loginController);
app.use('/login', loginRoutes.router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));