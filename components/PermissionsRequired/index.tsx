import { Text } from "@smartbills/react";
export interface Permission {
    scope: string;
}
export interface PermissionsRequiredProps {
    permissions: Permission[]
}
export function PermissionsRequired({ permissions = [{ scope: "TEst 232 32 " }] }: PermissionsRequiredProps) {
    return (
        <div>
            {permissions.map((permission, index) =>
                <Text key={index}>{permission.scope}</Text>
            )}
        </div>
    )
}