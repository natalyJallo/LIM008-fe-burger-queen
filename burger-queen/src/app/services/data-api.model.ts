export interface DataApi {
    $Key?: string;
    name?: string;
    mesa?: number;
    productos?: {
        string?: [
            number, number
        ];
    }
    
}
// precio y producto en observacion si sera un array para aguardar varios productos que comprara un cliente