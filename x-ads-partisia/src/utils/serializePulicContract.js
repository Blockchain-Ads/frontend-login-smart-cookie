import { BN, TypeIndex, FnRpcBuilder } from "abi-client-ts"
import { BigEndianByteOutput } from "bitmanipulation-ts"
import assert from "assert"

const builderToBytesBe = (rpc) => {
    const bufferWriter = new BigEndianByteOutput()
    rpc.write(bufferWriter)
    return bufferWriter.toBuffer()
}

export const isPrimitiveType = (typeIndex) => {
    const isNum = isNumericType(typeIndex)
    return isNum || [TypeIndex.bool, TypeIndex.String, TypeIndex.Address, TypeIndex.SizedByteArray].includes(typeIndex)
}
export const isNumericType = (typeIndex) => {
    const aryNumericTypes = [
        TypeIndex.u8,
        TypeIndex.u16,
        TypeIndex.u32,
        TypeIndex.u64,
        TypeIndex.u128,
        TypeIndex.i8,
        TypeIndex.i16,
        TypeIndex.i32,
        TypeIndex.i64,
        TypeIndex.i128,
    ]
    return aryNumericTypes.includes(typeIndex)
}

function buildBuffer(arg, rpc) {
    switch (arg.typeIndex) {
        case TypeIndex.Named:
            const rpcStruct = rpc.addStruct();
            for (const argStruct of arg.valStruct) {
                buildBuffer(argStruct, rpcStruct)
            }
            break;

        case TypeIndex.Option:
            const rpcOpt = rpc.addOption();

            // this would be if optional is selected
            // for optional if it is None then no further bytes added
            if (arg.valOptional !== null) buildBuffer(arg.valOptional, rpcOpt)

            break;
        case TypeIndex.Vec:
            const rpcVec = rpc.addVec()
            for (const argVec of arg.valVec) {
                buildBuffer(argVec, rpcVec)
            }
            break;

        // TODO; code for map
        // case TypeIndex.Map:
        //     const rpcMap = rpc.addMap()
        //     for (const argVec of arg.valVec) {
        //         buildBuffer(argVec, rpcVec)
        //     }
        //     break;

        // PRIMITIVES STRING
        case TypeIndex.SizedByteArray:
            rpc.addSizedByteArray(Buffer.from(arg.valPrimitive, "hex"));
            break;
        case TypeIndex.Address:
            rpc.addAddress(Buffer.from(arg.valPrimitive, "hex"));
            break;
        case TypeIndex.String:
            rpc.addString(arg.valPrimitive);
            break;
        case TypeIndex.bool:
            rpc.addBool(arg.valPrimitive);
            break;

        // PRIMITIVES NUMERIC
        case TypeIndex.u64:
            rpc.addU64(new BN(arg.valPrimitive));
            break;
        case TypeIndex.u128:
            rpc.addU128(new BN(arg.valPrimitive));
            break;
        case TypeIndex.i64:
            rpc.addI64(new BN(arg.valPrimitive));
            break;
        case TypeIndex.i128:
            rpc.addI128(new BN(arg.valPrimitive));
            break;

        case TypeIndex.u8:
            rpc.addU8(arg.valPrimitive);
            break;
        case TypeIndex.u16:
            rpc.addU16(arg.valPrimitive);
            break;
        case TypeIndex.u32:
            rpc.addU32(arg.valPrimitive);
            break;
        case TypeIndex.i8:
            rpc.addI8(arg.valPrimitive);
            break;
        case TypeIndex.i16:
            rpc.addI16(arg.valPrimitive);
            break;
        case TypeIndex.i32:
            rpc.addI32(arg.valPrimitive);
            break;

        default:
            if (process.env.DEV) console.log('Not Implemented', JSON.stringify(arg, null, 2))
            throw new Error('Not Implemented')
    }
}

export default function (fnAbi, contractAbi, args) {
    const rpc = new FnRpcBuilder(fnAbi.shortname, contractAbi)
    assert(args.length === fnAbi.arguments.length, 'mismatch number of args')

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        buildBuffer(arg, rpc)
    }
    return builderToBytesBe(rpc)
}