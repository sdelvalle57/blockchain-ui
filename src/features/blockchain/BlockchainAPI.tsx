import { useMutation } from "@apollo/client";
import { MutationRoot, BlockchainInitiated, MutationRootInitNewBlockchainArgs } from "../../apollo/__generated__/graphql";

const [initBlockchain, { data, loading, error }] = useMutation<MutationRoot, MutationRootInitNewBlockchainArgs>(BlockchainInitiated);