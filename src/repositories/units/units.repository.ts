import { Unit } from '../../models/unit';

export interface UnitsRepository {
    getUnits(): Unit[];
}